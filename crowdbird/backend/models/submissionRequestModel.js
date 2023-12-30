const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const submissionRequestSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    businessName:{
        type:String,
        required: true
    },
    enrollmentNumber:{
        type:String,
        required: true
    },
    idea:{
        type:String,
        required: true
    },
    isMailed:{
        type:Boolean,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('Submission',submissionRequestSchema);