const axios = require("axios");
const saveLogs = require("../../common/handler/savelogs.handler");

const sendEmail = async ({ useremail, usernamefull, message }) => {
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
  //   await saveLogs({ email: useremail, status: resMail.statusText, message, response: JSON.stringify(resMail.data) });
  // } catch (error) {
  //   throw new Error(error.message);
  // }
};

module.exports = { sendEmail };
