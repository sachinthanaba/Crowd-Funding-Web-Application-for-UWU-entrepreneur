const postRequestModel = require('../models/postRequestModel');



// CONTROLLER FOR ADD NEW POST
const createPostRequestController =async (request,response)=>{
    const {id,img,name,desc,likes,liked,status} = request.body;
     
     try {

        // adding comment into db
        const postRequest = await postRequestModel.create({id,img,name,desc,likes,liked,status});
        response.status(200).json({
            
            id:postRequest.id,
            img:postRequest.img,
            name:postRequest.name,
            desc:postRequest.desc,
            likes:postRequest.likes,
            liked:postRequest.liked,
            status:postRequest.status
     
        
        
        });
        console.log("Post added successfully")

    } catch (error) {
        console.error("Post adding to the database unsuccessfull")
        response.status(400).json({status:"ERROR",msg: error})  ;
    };  
}


// CONTROLLER FOR GET ALL POSTS
const getPostRequestController =async (request,response)=>{
    

     // get Posts from DB 
     try {
        const postResponse = await postRequestModel.find({}).sort({id:-1});


     
        // check whether posts successfull response recive
        if(!postResponse){
            return response.status(400).json({status:"ERROR",accessStatus:"DENIED",msg: 'Error while getting posts'})
        }
     
        var data = []
        postResponse.forEach(function(object){
        data.push({
            id:object.id,
            img:object.img,
            name:object.name,
            desc:object.desc,
            likes:object.likes,
            liked:object.liked,
            status:object.status

      });
    });

        // sending the response
        response.status(200)
        .json(data);
    } catch (error) {
        console.error("Retreiving posts from the database unsuccessfull")
        response.status(400).json({status:"ERROR",accessStatus:"DENINED",msg: error.message})  ;
    };  
}



// CONTROLLER FOR UPDATE POST STATUS
const updatePostRequestController =async (request,response)=>{
    

    const {id,status} = request.body;
     
     try {

        // adding comment into db
        var myquery = { id: id };
        var newvalues = { $set: {status: status} };
        const postRequest = await postRequestModel.updateOne(myquery,newvalues);
       
        console.log("Post updated successfully")
        response.status(200).json({status:"SUCCESS",id:postRequest.id});
    } catch (error) {
        console.error("Post adding to the database unsuccessfull")
        response.status(400).json({status:"ERROR",msg: error})  ;
    };  
}


// CONTROLLER FOR DELETE POSTS 
const deletePostRequestController =async (request,response)=>{
    

    const {id} = request.body;
     
     try {

        // DELETE POST FROM DB
        var myquery = { id: id };
      
        const postRequest = await postRequestModel.deleteOne(myquery);
       
        console.log("Post Deleted Successfully")
        response.status(200).json({status:"SUCCESS"});
    } catch (error) {
        console.error("Post adding to the database unsuccessfull")
        response.status(400).json({status:"ERROR",msg: error})  ;
    };  
}


module.exports={createPostRequestController,getPostRequestController,updatePostRequestController,deletePostRequestController};