const ErrorMessageObj = require("../objClass/ErrMessageObj.class");
const ResObjectStats = require("../objClass/ResObjectStats.class");
const saveLogs = require("./savelogs.handler");

const responseHandler = ({ res, statusCode = 200, objResponse, data, support, error }) => {
  const statObjRes = new ResObjectStats();
  const objErrorMessage = new ErrorMessageObj();

  if (objResponse) {
    statObjRes.status = objResponse?.resultstatus || 0;
    statObjRes.tokentrans = objResponse?.resulttokentrans || "";
    statObjRes.index = objResponse?.resultindex || "";

    if (objResponse.resultmessage) {
      statObjRes.message = objResponse?.resultmessage || [];
    }

    if (objResponse.resulterrormessage || objResponse?.resultcode !== "xxx000000000") {
      objErrorMessage.code = objResponse?.resultcode;
      objErrorMessage.errormassage = objResponse.resulterrormessage;
      objErrorMessage.codevariable = objResponse?.resultcodevariable || "";

      statObjRes.message = [objErrorMessage];
    } else {
      objErrorMessage.errormassage = [];
    }
  }

  // handle error from multer "upload image"
  if (error?.name === "MulterError") {
    statusCode = 400;
    statObjRes.status = 0;

    objErrorMessage.code = "xxx999999999";
    objErrorMessage.errormassage = error.message;

    statObjRes.message = [objErrorMessage];
  }

  if (error?.statusCode === 400) {
    statusCode = 400;
    statObjRes.status = 0;

    objErrorMessage.code = "xxx999999999";
    objErrorMessage.errormassage = error.message;

    statObjRes.message = [objErrorMessage];
  }

  if (statusCode >= 500) {
    statObjRes.status = 0;
  }

  if (error) console.error(error);
  saveLogs(res, statusCode, {statObjRes, data, support });

  return res.status(statusCode).send({ status: statObjRes, data: data, support });
};

module.exports = responseHandler;
