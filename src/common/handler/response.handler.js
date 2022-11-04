const ResObjectStats = require("../objClass/ResObjectStats.class");
const saveLogs = require("./savelogs.handler");

const responseHandler = (res, objResponse, data, support) => {
  const statObjRes = new ResObjectStats();

  if (objResponse && objResponse.resultstatus) {
    statObjRes.status = objResponse.resultstatus;
    statObjRes.code = objResponse.resultcode;
    statObjRes.errormessage = objResponse.resulterrormessage;
    statObjRes.tokentrans = objResponse.resulttokentrans;
    statObjRes.index = objResponse.resultindex;
  }
  let statusCode = statObjRes.status ? 200 : 400;
  saveLogs(res, statusCode, statObjRes);

  return res.status(statusCode).send({ status: statObjRes, data: data, support });
};

module.exports = responseHandler;
