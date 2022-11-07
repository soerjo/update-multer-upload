const Joi = require("joi");
const responseHandler = require("../handler/response.handler");
const ErrorMessageObj = require("../objClass/ErrMessageObj.class");
const ResObjectResult = require("../objClass/ResObject.class");

const validatorHeaders = (schema) => async (req, res) => {
  const objReturnData = new ResObjectResult();

  try {
    const { error, value } = await schema.validate(req.headers, { abortEarly: false });

    const {
      host,
      accept,
      connection,
      "content-type": contenttype,
      "user-agent": useragent,
      "cache-control": cachecontrol,
      "postman-token": postman,
      "accept-encoding": acceptencoding,
      "content-length": contentlength,
      ...resheaders
    } = value;

    if (error) {
      objReturnData.resultstatus = error && 0;
      objReturnData.resultmessage =
        error &&
        error.details.map((err) => {
          const objErrorMessage = new ErrorMessageObj();

          objErrorMessage.code = err.message.replace(/\"/g, "").substring(0, 12);
          objErrorMessage.errormassage = err.message.replace(/\"/g, "");
          objErrorMessage.codevariable = "";

          return { ...objErrorMessage };
        });

      return responseHandler({ res, statusCode: 400, objResponse: objReturnData });
    }

    req.next = { ...req.next, ...resheaders };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = validatorHeaders;
