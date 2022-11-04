const LogsModel = require("../../model/logs.model");

const saveLogs = async (res, statusCode, statObjRes, error) => {
  try {
    const payload = {
      status: statObjRes.status,
      action: res.action || res.logs.logRequestObj?.action || "",
      userindex: res.logs.request.body?.userindex || "",
      error: error?.message,
      logweb: res.logs.request.body.platform === "WEBSITE",
      logapp: res.logs.request.body.platform !== "WEBSITE",
      platform: res.logs.request.body.platform,
      datetime: new Date().toISOString(),
      ...res.logs.logRequestObj,
      responsetime: `${new Date().getTime() - res.logs.logRequestObj.timestamp}ms`,
      request: res.logs.request,
      response: {
        code: statusCode,
        statObjRes,
      },
    };
    console.log(
      `[ ${res.logs.logRequestObj.method} | ${res.logs.logRequestObj.url} | ${statusCode} ] - ${res.logs.logRequestObj.date} | ${new Date().getTime() - res.logs.logRequestObj.timestamp}ms `
    );

    LogsModel.create({ ...payload });
  } catch (error) {
    console.error(error);
  }
};

module.exports = saveLogs;
