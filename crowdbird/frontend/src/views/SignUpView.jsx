import { useState,useEffect } from "react";
import axios from 'axios';
import Logo from "../assets/logoMain.png" ;
import '../App.css';
import * as Constant from "../constants";

const SignUpView = () => { 

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [companyName,setCompanyName] = useState('');
    const [companyAddress,setCompanyAddress] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isAllFieldsFilled,setAllFieldsFilled] =useState(true);
    const [isEmailIsValid,setEmailIsValid] =useState(true);
    const [isSubmitClicked,setSubmitClickedStatus] =useState(false);
    const [isFormClicked,setFormClickedStatus] =useState(false);
    const [error,setError] =useState(null);

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
      },[firstName,lastName,companyName,email,password]);  


    const onRegisterClicked = async (e) => {
        e.preventDefault();
        setSubmitClickedStatus(true);

        const allFieldsFilledStatus = verifyIsAllFieldsFilled();
        if(allFieldsFilledStatus && isEmailIsValid){
      
            const userObject = {
                firstName,
                lastName,
                companyName,
                companyAddress,
                email,
                password
            };
            await axios.post(`${Constant.SERVICE_URL}/api/signup/`, userObject)
                .then((res) => {
                    if (res.data.status === "SUCCESS") {

                        setFirstName('');
                        setLastName('');
                        setCompanyName('');
                        setCompanyAddress('');
                        setEmail('');
                        setPassword('');
                        setAllFieldsFilled(true);
                        setEmailIsValid(true);
                        setSubmitClickedStatus(false);
                        setFormClickedStatus(false);
                        setError(false);

                        window.location.href = '/advertisements';
                    } else {
                        setError(res.data.msg)
                    }

                }).catch((error) => {
                    setError(error.response.data.msg)
            });
        }
        
    }


    // check all feilds filled status
    const verifyIsAllFieldsFilled = () =>{
        if(firstName===''){
            setAllFieldsFilled(false);
           return false;
        }
        if(lastName===''){
            setAllFieldsFilled(false);
            return false;
        }
        if(companyName===''){
            setAllFieldsFilled(false);
            return false;
        }
        if(companyAddress===''){
            setAllFieldsFilled(false);
            return false;
        }
        if(email===''){
            setAllFieldsFilled(false);
            return false;
        }
        if(password===''){
            setAllFieldsFilled(false);
            return false;
        }
        setAllFieldsFilled(true);
        return true;
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




    //signup form on change
    const onChange = (e)=>{
        setFormClickedStatus(true);

       if(e.target.name==="firstName"){
        setFirstName(e.target.value);
       }
       if(e.target.name==="lastName"){
        setLastName(e.target.value);
       }
       if(e.target.name==="companyName"){
        setCompanyName(e.target.value);
       }
       if(e.target.name==="companyAddress"){
        setCompanyAddress(e.target.value);
       }
       if(e.target.name==="email"){
        setEmail(e.target.value);
       }
       if(e.target.name==="password"){
        setPassword(e.target.value);
       }
    }


    return (
        <div className=''>
                <div className="App">
                    <header className="App-header">
                        <div className="row container mx-5">
                            <div className="col-sm-6">
                                <div className="">
                                    <div className="card-body">
                                        <img src={Logo} className="imgClass" alt="Logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="text-dark text-left">
                                    <div className="card-body">
                                        <h5 className="text-center my-5">Registration Form</h5>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-2">
                                                    <label className="form-label">First Name</label>
                                                    <input type="text" value={firstName} className="form-control" id="un" name="firstName" aria-describedby="emailHelp"   onChange={onChange}></input>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-2">
                                                    <label className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" id="un" aria-describedby="emailHelp" name="lastName" value={lastName}   onChange={onChange}></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">Company Name</label>
                                            <input type="text" className="form-control" id="un" aria-describedby="emailHelp" name="companyName"  value={companyName}   onChange={onChange}></input>
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">Company Address</label>
                                            <input type="text" className="form-control" id="un" aria-describedby="emailHelp" name="companyAddress"  value={companyAddress}   onChange={onChange}></input>
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">Email address</label> 
                                            <input type="text" className="form-control" id="un" aria-describedby="emailHelp" name="email"  value={email}   onChange={onChange}></input>
                                        </div>
                                        { !isEmailIsValid && <div className="error">{"please enter a valid email address"}</div>}<br/>
                                        <div className="mb-2">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" id="pw"  value={password} name="password"   onChange={onChange}></input>
                                        </div>
                                        <div className="mb-2">
                                            <button type="button" className="btn btn-success"  onClick={(e)=>onRegisterClicked(e)}>Register</button>
                                        </div>
                                        {!isAllFieldsFilled && <div className="error">{"please fill all feilds"}</div>}
                                        {error && <div className="error">{error}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>



                    </header>
                </div>
            </div>
    )
 }
  
export default SignUpView