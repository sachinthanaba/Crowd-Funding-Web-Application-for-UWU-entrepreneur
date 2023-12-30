const commentRequestModel = require('../models/commentRequestModel');


// CONTROLLER FOR CREATE COMMENT
const createCommentRequestController =async (request,response)=>{
    const {id,parentId,userName,body,userId,createdAt} = request.body;
     
     try {

        // adding comment into db
        const commentRequest = await commentRequestModel.create({id,parentId,userName,body,userId,createdAt});
        response.status(200).json({
            
            id:commentRequest.id,
            parentId:commentRequest.parentId,
            userName:commentRequest.userName,
            body:commentRequest.body,
            userId:commentRequest.userId,
            createdAt:commentRequest.createdAt,
     
        
        
        });
        console.log("Comment added successfully")

    } catch (error) {
        console.error("Comment adding to the database unsuccessfull")
        response.status(400).json({status:"ERROR",msg: error})  ;
    };  
}


// CONTROLLER FOR GET ALL COMMENTS
const getCommentRequestController =async (request,response)=>{
    

     // get comments from DB 
     try {
        const commentResponse = await commentRequestModel.find({}).sort({createdAt:-1});


     
        // user & password validation
        if(!commentResponse){
            return response.status(400).json({status:"ERROR",accessStatus:"DENIED",msg: 'Error Getting Comments'})
        }
     
        var data = []
        commentResponse.forEach(function(object){
        data.push({
            id: object.id,
            body: object.body,
            userName: object.userName,
            userId: object.userId,
            parentId: object.parentId,
            createdAt: object.createdAt,

      });
    });

        // sending the response
        response.status(200)
        .json(data);
    } catch (error) {
        console.error("user retreiving from the database unsuccessfull")
        response.status(400).json({status:"ERROR",accessStatus:"DENINED",msg: error.message})  ;
    };  
}

module.exports={createCommentRequestController,getCommentRequestController};