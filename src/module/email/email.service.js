const axios = require("axios");
const saveLogs = require("../../common/handler/savelogs.handler");
const saveLogsEmail = require("../../common/handler/savelogsEmail.handler");
const ApiResponseObj = require("../../common/objClass/ApiResObj.class");

const sendEmail = async ({ res, useremail, usernamefull, message }) => {
  res.actions = [res.actions, "/email"];
  const apiObj = new ApiResponseObj();

  try {
    const resMail = await axios.post(
      "https://email-portal.6mbr.com/api/sendmailfdafdsa",
      {
        email: useremail,
        from: "noreply@dhita.net",
        from_name: "dhita.net registration",
        subject: usernamefull + ", welcome to xdw.net. Please create initial password",
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
    apiObj.apiName = "call Email api";
    apiObj.timeStamp = new Date().getTime();
    apiObj.response = resMail.data;
  } catch (error) {
    apiObj.apiName = "call email api";
    apiObj.timeStamp = new Date().getTime();
    apiObj.response = error.response.data;
  }

  res.apiresponse = [...res.apiresponse, apiObj];
  saveLogsEmail(res);
};

module.exports = { sendEmail };
