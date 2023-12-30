const loginSignUpRequestModel = require('../models/loginSignupRequestModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// CONTROLLER FOR SIGNUP REQUEST
const signUpRequestController =async (request,response)=>{
    const {firstName,lastName,companyName,companyAddress,email,password} = request.body;
     
     try {

        // checking is email is exits
        const user = await loginSignUpRequestModel.findOne({ email: email });
        if(user){
            return response.status(400).json({status:"ERROR",msg: "Email is already in use. Please use another email"})
        }

        // encrpting the password
        const encryptedPassword = await bcrypt.hash(password,10);
        // adding user into db
        const signUpRequest = await loginSignUpRequestModel.create({firstName,lastName,companyName,companyAddress,email,password:encryptedPassword,type:'user'});
        response.status(200).json({status:"SUCCESS",msg: "User registered successfully"});
        console.log("user added to the database successfully")

    } catch (error) {
        console.error("user adding to the database unsuccessfull")
        response.status(400).json({status:"ERROR",msg: error})  ;
    };  
}


// CONTROLLER FOR LOGIN REQUEST
const loginRequestController =async (request,response)=>{
    const {email,password} = request.body;

     // get user from db
     try {
        const logInRequestedUser = await loginSignUpRequestModel.findOne({ email: email });
        
        // user & password validation
        if(!logInRequestedUser){
            return response.status(400).json({status:"ERROR",accessStatus:"DENIED",msg: 'User not found'})
        }else if(!await bcrypt.compare(password, logInRequestedUser.password)){
            return response.status(400).json({status:"ERROR",accessStatus:"DENIED",msg: 'Password is incoreect'})
        }
        
        //jwt token generation
        const token = jwt.sign({email:logInRequestedUser.email},process.env.JWT_SECRET);
        console.log(token)

        // sending the response
        response.status(200)
        .json({status:"SUCCESS",
            accessStatus:"ALLOWED",
            data:{email:logInRequestedUser.email,token,type:logInRequestedUser.type,firstName:logInRequestedUser.firstName,lastName:logInRequestedUser.lastName},
            msg: "VALID USER"});
    } catch (error) {
        console.error("user retreiving from the database unsuccessfull")
        response.status(400).json({status:"ERROR",accessStatus:"DENINED",msg: error.message})  ;
    };  
}

module.exports={signUpRequestController,loginRequestController};