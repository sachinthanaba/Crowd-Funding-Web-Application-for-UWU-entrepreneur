import { useState,useEffect } from "react";
import * as Constant from "../constants";

const IdeaSubmissionView = () => {

    const [name,setName] =useState('');
    const [email,setEmail] =useState('');
    const [businessName,setBusinessName] =useState('');
    const [enrollmentNumber,setEnrollmentNumber] =useState('');
    const [idea,setIdea] =useState('');
    const [isMailed,setIsMailed] =useState(false);
    const [isAllFieldsFilled,setAllFieldsFilled] =useState(true);
    const [isEmailIsValid,setEmailIsValid] =useState(true);
    const [isFormClicked,setFormClickedStatus] =useState(false);
    const [isSubmitClicked,setSubmitClickedStatus] =useState(false);
    const [error, setError] = useState(null)
    const [isFormSubmissionSuccess, setFormSubmissionSuccess] = useState(null)


    // conatct form on submit
    const onSubmit = async (e) =>{
        e.preventDefault();
        setSubmitClickedStatus(true);

        const allFieldsFilledStatus = verifyIsAllFieldsFilled();
        if(allFieldsFilledStatus && isEmailIsValid){

            const contactRequest = {name,email,businessName,enrollmentNumber,idea,isMailed};

            const response = await fetch(`${Constant.SERVICE_URL}/api/submission/`, {
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
                setBusinessName('');
                setEnrollmentNumber('')
                setIdea('')
                setIsMailed(false);
                setFormSubmissionSuccess(true);
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
      },[name,email,businessName,enrollmentNumber,idea]);



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
        if(businessName===''){
            setAllFieldsFilled(false);
            return false;
        }
        if(enrollmentNumber===''){
            setAllFieldsFilled(false);
            return false;
        }
        if(idea===''){
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
       if(e.target.name==="businessName"){
        setBusinessName(e.target.value);
       }
       if(e.target.name==="enrollmentNumber"){
        setEnrollmentNumber(e.target.value);
       }
       if(e.target.name==="idea"){
        setIdea(e.target.value);
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
            <div class="form-submission-container">
                <form class="contact-form"> 
                    <h2>IDEA SUBMISSION FORM</h2>
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
                        id="business name" 
                        name="businessName" 
                        placeholder="Business Name" 
                        value={businessName}
                        onChange={onChange}
                    /><br/>
                    <input 
                        type="text" 
                        id="enrollmentnumber" 
                        name="enrollmentNumber" 
                        placeholder="Enrollment Number" 
                        value={enrollmentNumber}
                        onChange={onChange}
                    /><br/>
                    <textarea 
                        id="idea" 
                        name="idea" 
                        placeholder="your idea" 
                        cols="30" 
                        rows="10" 
                        value={idea}
                        onChange={onChange}
                    /><br/>
                    <p>If you need to send any additional documents, photos or videos, you can send them directly to 
                        our official email (crowdbird@gmail.com). Please make sure to send it via only your university
                        email and you must mention your university enrollment number as the subject of the email and please 
                        mark the below button.
                    </p>

                    <input 
                        type="checkbox" 
                        className="input-radio"
                        name="radio"
                        value={isMailed}
                        onChange={() => setIsMailed(!isMailed)}
                    />
                    <span>
                    mailed the additional documents
                    </span>
                       
                   
                    <input 
                        type="button" 
                        class="submit" 
                        value="Submit" 
                        onClick={onSubmit}
                    />
                    { !isAllFieldsFilled && <div className="error">{"please fill all feilds"}</div>}
                    {error && <div className="error">{error}</div>}
                    {isFormSubmissionSuccess && <div className="success">{"your submission submitted"}</div>}
                </form>
                
            </div>
            <br/><br/>
        </div>
    )
  }
  
  export default IdeaSubmissionView