const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const posttDetailsSchema = new Schema({

    id:{
        type:String,
        required: true
    },
    img:{
        type:String,
        required: false
    },
    name:{
        type:String,
        required: true
    },
    desc:{
        type:String,
        required: true
    },
    likes:{
        type:Number,
        required: true
    }
    ,
    liked:{
        type:Boolean,
        required: true
    }
    ,
    status:{
        type:String,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('PostDetail',posttDetailsSchema);