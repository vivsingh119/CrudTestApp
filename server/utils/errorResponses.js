const logger=require("../logger/logger");

module.exports=(err,req,res,next)=>{
    let statusCode=err.statusCode || 500;
    logger.error({status:statusCode,message:err.message,stack:err.stack});
    res.status(statusCode).json({success:0,message:err.message});
  }
