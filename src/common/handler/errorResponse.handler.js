const ResObjectStats = require("../objClass/ResObjectStats.class");

const errorResponseHandler = (res, statusCode, objResponse) => {
  try {
    const statObjRes = new ResObjectStats();

    statObjRes.status = 0;
    statObjRes.code = objResponse.resultcode;
    statObjRes.errormessage = objResponse.resulterrormessage;
    statObjRes.tokentrans = objResponse.resulttokentrans;
    statObjRes.index = objResponse.resultindex;

    return res.status(statusCode).send({ status: statObjRes });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = errorResponseHandler;
