const ResObjectStats = require("../objClass/ResObjectStats.class");

const responseHandler = (res, objResponse, data, support) => {
  const statObjRes = new ResObjectStats();

  if (objResponse.resultstatus) {
    statObjRes.status = objResponse.resultstatus;
    statObjRes.code = objResponse.resultcode;
    statObjRes.errormessage = objResponse.resulterrormessage;
    statObjRes.tokentrans = objResponse.resulttokentrans;
    statObjRes.index = objResponse.resultindex;
  }

  return res.status(statObjRes.status ? 200 : 400).send({ status: statObjRes, data: data, support });
};

module.exports = responseHandler;
