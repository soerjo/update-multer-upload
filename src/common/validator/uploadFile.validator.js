const responseHandler = require("../handler/response.handler");
const ErrorMessageObj = require("../objClass/ErrMessageObj.class");
const ResObjectResult = require("../objClass/ResObject.class");

const validateUploadImage = async (req, res) => {
  const objReturnData = new ResObjectResult();
  const objErrorMessage = new ErrorMessageObj();

  if (!req.file || req.file.length <= 0) {
    objErrorMessage.code = "xxx999999960";
    objErrorMessage.errormassage = "file image is not found";
    objErrorMessage.codevariable = "";

    objReturnData.resultstatus = 0;
    objReturnData.resultmessage = [objErrorMessage];

    return responseHandler({ res, objResponse: objReturnData });
  }
};

module.exports = validateUploadImage;
