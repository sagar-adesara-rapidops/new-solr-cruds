class ExternalServiceError extends Error {
  constructor(customCode, statuscode, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ExternalServiceError);
    }

    this.customCode = customCode;

    this.name = "ExternalServiceError";
    // Custom debugging information
    this.httpStatusCode = statuscode;
    this.date = new Date();
  }
}
module.exports = ExternalServiceError;
