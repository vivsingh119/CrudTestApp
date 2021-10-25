const logger = require("../logger/logger");
const Employee = require("../model/employee");
const CustomError = require("../utils/customError");
exports.createEmployee = async (req, res, next) => {
  try {
    const { body } = req;
    const employee = await Employee.create(body);
    res
      .status(201)
      .json({ status: true, message: "Employee created successfully",data:employee });
  } catch (error) {
    const err = new CustomError(error, 500);
    logger.error({
      status: err.statusCode,
      message: err.message,
      stack: err.stack,
    });
    return next(err);
  }
};

exports.updateEmployee=async(req,res,next)=>{
    const {body}=req;
   try{
    const employee=await Employee.findOne({ where: { eId: body.eId } });
    if(employee){
        const updateEmployee= Employee.update(body, { where: { eId: body.eId } })
        return res.status(201).json({ status: true, message: "Employee updated successfully",data:updateEmployee })
    }
    
   }catch(error){
    const err = new CustomError(error, 500);
    logger.error({
      status: err.statusCode,
      message: err.message,
      stack: err.stack,
    });
    return next(err);

   }
}