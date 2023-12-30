const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentDetailsSchema = new Schema({

    id:{
        type:String,
        required: true
    },
    parentId:{
        type:String,
        required: false
    },
    userName:{
        type:String,
        required: true
    },
    body:{
        type:String,
        required: true
    },
    userId:{
        type:String,
        required: true
    }
    ,
    createdAt:{
        type:String,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('CommentDetail',commentDetailsSchema);