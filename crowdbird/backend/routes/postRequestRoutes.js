const express = require('express');
const {createPostRequestController,getPostRequestController,updatePostRequestController, deletePostRequestController} = require('../controllers/postRequestControllers');

const router = express.Router();


// ROUTE FOR ADD A POST
router.post('/post',createPostRequestController);


// ROUTE FOR GET POSTS
router.get('/post',getPostRequestController);


// ROUTE FOR PUT POSTS
router.put('/post',updatePostRequestController);


// ROUTE FOR DELETE POSTS
router.delete('/post',deletePostRequestController);

module.exports = router;