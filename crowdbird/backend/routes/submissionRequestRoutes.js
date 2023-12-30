const express = require('express');
const {submitSubmissionFormRequestController} = require('../controllers/submissionRequestController');

const router = express.Router();


// ROUTE FOR POST A SUBMISSION FORM REQUEST
router.post('/',submitSubmissionFormRequestController);

module.exports = router;