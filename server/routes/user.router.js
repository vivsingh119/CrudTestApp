const express = require("express");
const router = express.Router();

/* Requestbody validation before hitting the DB */
const employeeValidation=require("../helper/employee.validation")

/* UserController */
const employeeController = require("../controller/employee.controller");

router.post("/post",employeeValidation.EmployeeValidation, employeeController.createEmployee);

router.put("/put", employeeController.updateEmployee);

//router.get("/verify-email",userSignupController.verifymail);
module.exports = router;