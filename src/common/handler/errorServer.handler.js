const ResObjectStats = require("../objClass/ResObjectStats.class");
const saveLogs = require("./savelogs.handler");

const errorServerHandler = (error, _, res) => {
  const statObjRes = new ResObjectStats();
  const isclienterorr = error.statusCode === 400;
  let statusCode = isclienterorr ? 400 : 500;

  if (error.name === "MulterError") {
    statusCode = 400;
    statObjRes.status = 0;
    statObjRes.errormessage = error.message;
    statObjRes.code = "xxx999999999";
  } else {
    statObjRes.status = 0;
    statObjRes.code = "xxx999999999";
    statObjRes.errormessage = isclienterorr ? error.message : "server error";
  }

  saveLogs(res, statusCode, statObjRes, error);
  console.error(error);

  return res.status(statusCode).send({ status: statObjRes });
};

module.exports = errorServerHandler;
