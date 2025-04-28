// console.log('hi world');
// create simple api with help of express js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from  'dotenv';
import userRouter from './routes/user-routes.js';

// import userRouter from './routes/user-routes';
dotenv.config()
// const express = require('express')
const app = express();
//middlewares

app.use('/user',userRouter)
// app.use("/",(req,res,next)=>{
//     res.send('<h1>hi hello </h1>')
// })
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.vucc4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>app.listen (5000,() =>
    console.log('hi its connected')
)
)
.catch((e)=> console.log(e));


// console.log('hello !')
//FvxNWU71RvOXCZEL
//FT2lJVtctSdXzYMM
//FT2lJVtctSdXzYMM