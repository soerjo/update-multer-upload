const Joi = require("joi");
const responseHandler = require("../handler/response.handler");
const ErrorMessageObj = require("../objClass/ErrMessageObj.class");
const ResObjectResult = require("../objClass/ResObject.class");

const validateParams = (schema) => async (req, res) => {
  const objReturnData = new ResObjectResult();

  try {
    const { error, value } = await schema.validate(req.query, { abortEarly: false });

    if (error) {
      objReturnData.resultstatus = error && 0;
      objReturnData.resultmessage =
        error &&
        error.details.map((err) => {
          const objErrorMessage = new ErrorMessageObj();

          objErrorMessage.code = err.message.replace(/\"/g, "").substring(0, 12);
          objErrorMessage.errormassage = err.message.replace(/\"/g, "");
          objErrorMessage.codevariable = "";

          return objErrorMessage;
        });

      return responseHandler({ res, statusCode: 400, objResponse: objReturnData });
    }

    req.next = { ...value };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = validateParams;
