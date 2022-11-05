const LogsModel = require("../../model/logs.model");

const saveLogs = async (res, statusCode, statObjRes, error) => {
  try {
    const method = res.logs.method;
    const url = res.logs.url;
    const datetime = new Date().toISOString();
    const responsetime = `${new Date().getTime() - res.logs.timestamp}ms`;
    console.log(`[ ${method} | ${url} | ${statusCode} ] - ${datetime} | ${responsetime}`);

    const payload = {
      status: statObjRes.status,
      error: error?.message || "",
      action: res.actions || "",
      actionresult: res.actionresult || "",
      platform: res.requestobj.body?.platform,
      logweb: res.requestobj.body?.platform === "WEBSITE",
      logapp: res.requestobj.body?.platform !== "WEBSITE",
      datetime: datetime,
      responsetime: responsetime,
      ...res.logs,

      userindex: res.userobject?.userindex || "",
      username: res.userobject?.username || "",
      userfullname: res.userobject?.userfullname || "",
      userinitial: res.userobject?.userinitial || "",
      usercolorback: res.userobject?.usercolorback || "",
      userColorfront: res.userobject?.userColorfront || "",
      userphotoprofileurl: res.userobject?.userphotoprofileurl || "",

      ids: [...res.ids],

      request: res.requestobj,
      response: {
        code: statusCode,
        statObjRes,
      },
    };
    // console.log(payload);

    LogsModel.create({ ...payload });
  } catch (error) {
    console.error(error);
  }
};

module.exports = saveLogs;
