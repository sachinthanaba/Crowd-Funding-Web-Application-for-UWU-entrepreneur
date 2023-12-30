const express = require('express');
const {signUpRequestController,loginRequestController} = require('../controllers/loginSignupRequestControllers');

const router = express.Router();


// ROUTE FOR ADD A USER (SIGN UP)
router.post('/signup',signUpRequestController);

// ROUTE FOR GET A USER (LOG IN)
router.post('/login',loginRequestController);

module.exports = router;