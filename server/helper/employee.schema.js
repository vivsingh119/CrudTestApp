const joi = require("joi");

/* checking whether request body match with all field   */

exports.EmployeeSchema = {
  employee: joi.object({
    firstName: joi.string().min(3).max(20).required(),
    lastName: joi.string().min(3).max(10).required(),
    email: joi.string().email().required(),
    age: joi.number().required(),
  }),
};
