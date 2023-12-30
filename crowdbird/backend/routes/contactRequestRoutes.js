const express = require('express');
const {submitContactFormRequestController} = require('../controllers/contactRequestControllers');

const router = express.Router();


// ROUTE FOR POST A CONTACT FORM REQUEST
router.post('/',submitContactFormRequestController);

module.exports = router;