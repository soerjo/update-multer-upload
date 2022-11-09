const axios = require("axios");
const saveLogs = require("../../common/handler/savelogs.handler");
const saveLogsEmail = require("../../common/handler/savelogsEmail.handler");
const ApiResponseObj = require("../../common/objClass/ApiResObj.class");

const sendEmail = async ({ res, useremail, message, subject, usernamefull }) => {
  // res.actions = [res.actions, "/email"];
  const apiObj = new ApiResponseObj();

  try {
    const resMail = await axios.post(
      "https://email-portal.6mbr.com/api/sendmail",
      {
        email: useremail,
        from: "noreply@dhita.net",
        from_name: "dhita.net registration",
        subject: subject,
        content: message,
        bcc: ["noreply@dhita.net"],
      },
      {
        headers: {
          api_user: "crypt4305",
          api_pass: "IA53bHryLa",
        },
      }
    );
    const logsError = {
      status: resMail?.status,
      statusText: resMail?.statusText,
      method: resMail?.config?.method,
      url: resMail?.config?.url,
      data: resMail?.config?.data,
      bodyresponse: resMail?.data,
    };
    apiObj.apiName = "call Email api";
    apiObj.timeStamp = new Date().getTime();
    apiObj.response = logsError;
  } catch (error) {
    const logsError = {
      status: error.response?.status,
      statusText: error.response?.statusText,
      method: error.response?.config?.method,
      url: error.response?.config?.url,
      data: error.response?.config?.data,
      bodyresponse: error?.response?.data,
    };
    apiObj.apiName = "call email api";
    apiObj.timeStamp = new Date().getTime();
    apiObj.response = logsError;
  }

  res.apiresponse = [...res.apiresponse, apiObj];
  saveLogsEmail(res);
};

module.exports = { sendEmail };
