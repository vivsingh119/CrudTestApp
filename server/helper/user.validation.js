const logger = require("../../logger/logger");
const schema = require("./user.schema");
const CustomError = require("../../utils/customError");
/* validating the request body  */

exports.EmployeeValidation = async (req, res, next) => {
  const value = await schema.EmployeeSchema.employee.validate(req.body);
  
  if (value.error) {
    const err = new CustomError(value.error.details[0].message.replace(/\"/g, ""), 400 );
    logger.error({status: err.statusCode, message: err.message, stack: err.stack,});
    return next(err);
  } else {
    next();
  }
};


