const express = require('express');
const {createCommentRequestController,getCommentRequestController} = require('../controllers/commentRequestControllers');

const router = express.Router();


// ROUTE FOR ADD A COMMENT
router.post('/comment',createCommentRequestController);

// ROUTE FOR DELETE COMMENT
//router.delete('/comment',loginRequestController);

// ROUTE FOR UPDATE A COMMENT
//router.put('/comment',loginRequestController);

// ROUTE FOR GET COMMENTS
router.get('/comment',getCommentRequestController);

module.exports = router;