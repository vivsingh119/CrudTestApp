class CustomError extends Error {
  constructor(messsage, statusCode) {
    super(messsage);
    this.statusCode = statusCode;
    this.hideMessage = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports=CustomError;