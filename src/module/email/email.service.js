const axios = require("axios");
const ApiResponseObj = require("../../common/objClass/ApiResObj.class");

const sendEmail = async ({ res, useremail, usernamefull, message }) => {
  const apiObj = new ApiResponseObj();

  // try {
  //   const resMail = await axios.post(
  //     "https://email-portal.6mbr.com/api/sendmail",
  //     {
  //       email: useremail,
  //       from: "noreply@dhita.net",
  //       from_name: "dhita.net registration",
  //       subject: usernamefull + ", welcome to xdw.net. Please create initial password",
  //       content: message,
  //       bcc: ["noreply@dhita.net"],
  //     },
  //     {
  //       headers: {
  //         api_user: "crypt4305",
  //         api_pass: "IA53bHryLa",
  //       },
  //     }
  //   );
  //   //   call MongoDb to save log mail

  apiObj.apiName = "call email api";
  apiObj.timeStamp = new Date().getTime();
  // apiObj.response = otpResponse.data;

  res.apiresponse = [...res.apiresponse, apiObj];

  // } catch (error) {
  //   throw new Error(error.message);
  // }
};

module.exports = { sendEmail };
