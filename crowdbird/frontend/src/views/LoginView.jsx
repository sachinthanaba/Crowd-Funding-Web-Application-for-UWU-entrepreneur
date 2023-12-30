import { useState,useEffect } from "react";
import axios from 'axios';
import Logo from "../assets/logoMain.png" ;
import '../App.css';
import * as Constant from "../constants";

const LoginView = () => {

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

     //login form on change
     const onChange = (e)=>{
        setFormClickedStatus(true);

       if(e.target.name==="email"){
        setEmail(e.target.value);
       }
       if(e.target.name==="password"){
        setPassword(e.target.value);
       }
    }


    const onLoginClicked = async (e) => {

        e.preventDefault();
        setSubmitClickedStatus(true);

        const allFieldsFilledStatus = verifyIsAllFieldsFilled();
        if(allFieldsFilledStatus){

            const loginUserObject = {
                email,
                password,
                
            };

            await axios.post(`${Constant.SERVICE_URL}/api/login/`, loginUserObject)
            .then((res) => {
                if (res.data.status === "SUCCESS") {

                    setEmail('');
                    setPassword('');
                    setAllFieldsFilled(true);
                    setEmailIsValid(true);
                    setSubmitClickedStatus(false);
                    setFormClickedStatus(false);
                    setError(false);

                    //storing access token and details into local storage
                    window.localStorage.setItem("userEmail",res.data.data.email);
                    window.localStorage.setItem("token",res.data.data.token);
                    window.localStorage.setItem("userType",res.data.data.type);
                    window.localStorage.setItem("fullName",res.data.data.firstName +" "+res.data.data.lastName);


                    // forwarding
                    if(res.data.data.type==="admin"){
                        window.location.href = 'http://localhost:3006/posts';
                    }else{
                        window.location.href = '/advertisements';
                    }

                   
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
    };

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
                                    <div className="card-body formContent">
                                        <h5 className="text-center my-5">Login Form</h5>
                                        <div className="mb-3">
                                            <label className="form-label">Email address</label>
                                            <input type="text" className="form-control" id="un" name="email" aria-describedby="emailHelp" onChange={onChange}></input>
                                        </div>
                                        { !isEmailIsValid && <div className="error">{"please enter a valid email address"}</div>}<br/>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" id="pw" name="password" onChange={onChange}></input>
                                        </div>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-2">
                                                    <button type="button" className="btn btn-success spacesClass" onClick={(e)=>onLoginClicked(e)}>LOGIN</button>
                                                </div>
                                                <div className="col-10 my-2 text-dark">
                                                    <small className="form-label">If you dont have account? <a href="/sign-up">SignUp</a></small>
                                                </div>
                                            </div>
                                            {!isAllFieldsFilled && <div className="error">{"please fill all feilds"}</div>}
                                            {error && <div className="error">{error}</div>}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>



                    </header>
                </div>
            </div>
)
}


export default LoginView