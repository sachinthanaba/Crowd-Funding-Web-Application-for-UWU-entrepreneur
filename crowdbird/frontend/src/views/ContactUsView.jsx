import { useState,useEffect } from "react";
import * as Constant from "../constants";

const ContactUsView = () => {

    const [name,setName] =useState('');
    const [email,setEmail] =useState('');
    const [subject,setSubject] =useState('');
    const [message,setMessage] =useState('');
    const [isAllFieldsFilled,setAllFieldsFilled] =useState(true);
    const [isEmailIsValid,setEmailIsValid] =useState(true);
    const [isFormClicked,setFormClickedStatus] =useState(false);
    const [isSubmitClicked,setSubmitClickedStatus] =useState(false);
    const [error, setError] = useState(null)
    const [isFormSubmissionSucess, setFormSubmissionSucess] = useState(null)


    // conatct form on submit
    const onSubmit = async (e) =>{
        e.preventDefault();
        setSubmitClickedStatus(true);

        const allFieldsFilledStatus = verifyIsAllFieldsFilled();
        if(allFieldsFilledStatus && isEmailIsValid){

            const contactRequest = {name,email,subject,message};

            const response = await fetch(`${Constant.SERVICE_URL}/api/contact/`, {
                method: 'POST',
                body: JSON.stringify(contactRequest),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              const json = await response.json()
          
              if (!response.ok) {
                setError(json.error)
              }
              if (response.ok) {
                setSubmitClickedStatus(false);
                setFormClickedStatus(false);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('')
                setFormSubmissionSucess(true);
              }
        }
    }

    // check email when changes detected
    useEffect(() => {
        if(isFormClicked){
            validateEmail(email);
        }
      },[email]);


    // check feilds filled status when changes detected
    useEffect(() => {
        if(isSubmitClicked){
            verifyIsAllFieldsFilled();
        }
      },[name,email,subject,message]);



    // check all feilds filled status
    const verifyIsAllFieldsFilled = () =>{
        if(name===''){
            setAllFieldsFilled(false);
           return false;
        }
        if(email===''){
            setAllFieldsFilled(false);
            return false;
        }
        if(subject===''){
            setAllFieldsFilled(false);
            return false;
        }
        if(message===''){
            setAllFieldsFilled(false);
            return false;
        }
        setAllFieldsFilled(true);
        return true;
    }


    //contact form on change
    const onChange = (e)=>{
        setFormClickedStatus(true);

       if(e.target.name==="name"){
        setName(e.target.value);
       }
       if(e.target.name==="email"){
        setEmail(e.target.value);
       }
       if(e.target.name==="subject"){
        setSubject(e.target.value);
       }
       if(e.target.name==="message"){
        setMessage(e.target.value);
       }
    }


    // check email is valid
    let validateEmail = ( email ) => {

        let rejex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if ( rejex.test(email) ) {
            setEmailIsValid(true);
        }
        else {
            setEmailIsValid(false);
        }
    }
    
    


    return (
        <div>
            <div class="form-container">
                <form class="contact-form"> 
                    <h2>CONTACT US</h2>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        onChange={onChange}
                        value={name}
                    /> <br/>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={onChange}
                        value={email}
                    />  { !isEmailIsValid && <div className="error">{"please enter a valid email address"}</div>}<br/>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        placeholder="Subject" 
                        value={subject}
                        onChange={onChange}
                    /><br/>
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Message" 
                        cols="30" 
                        rows="5" 
                        value={message}
                        onChange={onChange}
                    /><br/>
                    <input 
                        type="button" 
                        class="submit" 
                        value="Send Message" 
                        onClick={onSubmit}
                    />
                    { !isAllFieldsFilled && <div className="error">{"please fill all feilds"}</div>}
                    {error && <div className="error">{error}</div>}
                    {isFormSubmissionSucess && <div className="success">{"your message submitted"}</div>}
                </form>
                
            </div>
            <br/><br/>
        </div>
    )
  }
  
  export default ContactUsView