require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const contactFormRoutes = require('./routes/contactRequestRoutes');
const loginSignupRequestRoutes = require('./routes/loginSignupRequestRoutes');
const submissionRequestRoutes = require('./routes/submissionRequestRoutes');
const commentRequestRoutes = require('./routes/commentRequestRoutes');
const postRequestRoutes = require('./routes/postRequestRoutes');

// express app init
const app = express();

// CORS init
const cors = require("cors");
app.use(cors());

// request path & method logger
app.use((request,response,next)=>{
    console.log(request.path,request.method);
    next();
});

// db connection
mongoose.connect(process.env.MONG_URI)
.then((result)=>{
    console.log('database connection success')
    // listen for requests
    app.listen(process.env.PORT,()=>{
        console.log(`listning to port ${process.env.PORT}`);
       
    })
})
.catch((err)=>console.log('database connection error',err))

// if request consists JSON express wil act as a middleware
app.use(express.json());

// routes(this should be last step)
app.use('/api',loginSignupRequestRoutes);
app.use('/api/contact',contactFormRoutes);
app.use('/api/submission',submissionRequestRoutes);
app.use('/api',commentRequestRoutes);
app.use('/api',postRequestRoutes);
