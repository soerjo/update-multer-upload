const errorResponseHandler = require("../handler/errorResponse.handler");
const ResObjectResult = require("../objClass/ResObject.class");

const validateUploadImage = async (req, res) => {
  const objReturnData = new ResObjectResult();

  if (req.file.length <= 0) {
    objReturnData.status = 0;
    objReturnData.resultcode = "xxx999999960";
    objReturnData.resulterrormessage = "file image is not found";

    return errorResponseHandler(res, 404, objReturnData);
  }
};

module.exports = validateUploadImage;
