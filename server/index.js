require('dotenv').config();
const express =require("express");
const app=express();
const database = require("./config/db.config");
const errorResponses = require('./utils/errorResponses');
const CustomError = require('./utils/customError');

const port=process.env.PORT ||3001
app.use("/",(req,res)=>{
   res.status(200).json("Running Succesfuly");
})

//if we get wrong url
app.all("*",(req,res,next)=>{
    const error=new CustomError(`Requested endpoint ${req.path} not found !!`,415);
    next(error);
  })
  
  //special middleware for handling all error
  app.use(errorResponses);
  

database
  .sync()
  .then((result) => {
    console.log("DB connected", result);
  })
  .catch((error) => {
    console.log("Something went wrong", error);
  });
app.listen(port,()=>{
    console.log(`App running on http://localhost:${port}`)
})