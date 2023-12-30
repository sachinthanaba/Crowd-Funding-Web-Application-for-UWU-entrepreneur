const ConatctRequestModel = require('../models/contactRequestModel');

// CONTROLLER FOR POST A CONTACT FORM REQUEST INTO THE DB
const submitContactFormRequestController =async (request,response)=>{
    const {name,email,subject,message} = request.body;

     // add doc into db
     try {
        const contactFormRequest = await ConatctRequestModel.create({name,email,subject,message});
        response.status(200).json({status:"SUCCESS",msg:"conatct form request saved to the database successfully"});
        console.log("conatct form request saved to the database successfully")
    } catch (error) {
        console.error("conatct form request saved to the database unsuccessfull")
        response.status(400).json({status:"ERROR",msg:"conatct form request saved to the database unsuccessfull"});
    };  
}

module.exports={submitContactFormRequestController};