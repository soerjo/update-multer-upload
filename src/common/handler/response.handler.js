const ResObjectStats = require("../objClass/ResObjectStats.class");
const saveLogs = require("./savelogs.handler");

const responseHandler = ({ res, statusCode = 200, objResponse, data, support, error }) => {
  const statObjRes = new ResObjectStats();

  if (objResponse) {
    statObjRes.status = objResponse?.resultstatus;
    statObjRes.code = objResponse?.resultcode;
    statObjRes.errormessage = objResponse?.resulterrormessage;
    statObjRes.tokentrans = objResponse?.resulttokentrans;
    statObjRes.index = objResponse?.resultindex;
  }

  if (error?.name === "MulterError") {
    statusCode = 400;
    statObjRes.status = 0;
    statObjRes.errormessage = error.message;
    statObjRes.code = "xxx999999999";
  }

  if (error) console.error(error);
  saveLogs(res, statusCode, statObjRes);

  return res.status(statusCode).send({ status: statObjRes, data: data, support });
};

module.exports = responseHandler;
