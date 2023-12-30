const SubmissionRequestModel = require('../models/submissionRequestModel');

// CONTROLLER FOR POST A SUBMIT IDEA FORM REQUEST INTO THE DB
const submitSubmissionFormRequestController =async (request,response)=>{
    const {name,email,businessName,enrollmentNumber,idea,isMailed} = request.body;

     // add doc into db
     try {
        const submissionFormRequest = await SubmissionRequestModel.create({name,email,businessName,enrollmentNumber,idea,isMailed});
        response.status(200).json({status:"SUCCESS",msg:"submission form request saved to the database successfully"});
        console.log("submission form request saved to the database successfully")
    } catch (error) {
        console.error("submission form request saved to the database unsuccessfull")
        response.status(400).json({status:"ERROR",msg:"submission form request saved to the database unsuccessfull"});
    };  
}

module.exports={submitSubmissionFormRequestController};