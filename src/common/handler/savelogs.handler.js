const LogsModel = require("../../model/logs.model");

const saveLogs = async (res, statusCode, statObjRes, error) => {
  try {
    const method = res.logs?.method;
    const url = res.logs?.url;
    const datetime = new Date().toISOString();
    const responsetime = `${new Date().getTime() - res.logs?.timestamp}ms`;

    const payload = {
      logsid: res?.id || "",
      status: statObjRes?.status,
      error: error?.message || "",
      action: res.actions || "",
      actionresult: res.actionresult || "",
      platform: res.requestobj?.body?.platform,
      logweb: res.requestobj?.headers?.platform === "WEBSITE",
      logapp: res.requestobj?.headers?.platform === "ANDROID" || res.requestobj?.headers?.platform === "IPHONE",
      isnotification: res.isnotification,
      datetime: datetime,
      responsetime: responsetime,

      ...res.logs,
      timestamp: new Date().getTime(),

      userindex: res.userobject?.userindex || "",
      username: res.userobject?.username || "",
      userfullname: res.userobject?.userfullname || "",
      userinitial: res.userobject?.userinitial || "",
      usercolorback: res.userobject?.usercolorback || "",
      userColorfront: res.userobject?.userColorfront || "",
      userphotoprofileurl: res.userobject?.userphotoprofileurl || "",

      ids: res.ids ? [...res.ids] : [],
      APIresponse: res?.apiresponse || [],

      request: res.requestobj,
      response: {
        code: statusCode,
        ...statObjRes,
      },
    };

    LogsModel.create({ ...payload });
    console.log(`[ ${method} | ${url} | ${statusCode} ] - ${datetime} | ${responsetime}`);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

module.exports = saveLogs;
