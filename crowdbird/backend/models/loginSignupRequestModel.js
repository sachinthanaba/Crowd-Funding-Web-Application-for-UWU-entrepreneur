const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    companyName:{
        type:String,
        required: true
    },
    companyAddress:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('UserDetail',userDetailsSchema);