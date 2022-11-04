const Joi = require("joi");
const errorResponseHandler = require("../handler/errorResponse.handler");
const ResObjectResult = require("../objClass/ResObject.class");

const validator = (schema) => async (req, res) => {
  const objReturnData = new ResObjectResult();

  if (!req.body) {
    objReturnData.resultstatus = 0;
    objReturnData.resultcode = "xxx999999960";
    objReturnData.resulterrormessage = "body is not found";

    return errorResponseHandler(res, 400, objReturnData);
  }

  try {
    const { error, value } = await schema.validate(req.body);

    if (error) {
      objReturnData.resultstatus = error && 0;
      objReturnData.resultcode = error && error.details.map((err) => err.message.replace(/\"/g, "").substring(0, 12))[0];
      objReturnData.resulterrormessage = error && error.details.map((err) => err.message.replace(/\"/g, ""))[0];

      return errorResponseHandler(res, 400, objReturnData);
    }

    req.next = { ...value };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = validator;
