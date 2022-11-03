const { sendEmail } = require("../email/email.service");
const { execQuery } = require("../../configs/mysql.config");
const responseHandler = require("../../common/handler/response.handler");
const errorResponseHandler = require("../../common/handler/errorResponse.handler");

const namespace = "AUTH_CONTROLLER";

const profileController = async (req, res) => {
  const { userindex } = req.next;

  try {
    let resultspuserprofile = await execQuery("CALL spxxxuserprofile(?)", [userindex]);
    resultspuserprofile = resultspuserprofile[0][0];

    return responseHandler(res, {}, resultspuserprofile);
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateUsernameController = async (req, res) => {
  const { platform, userindex, tableusername } = req.next;

  try {
    let resultspuserprofile = await execQuery("CALL spxxxupdateprofile(?,?,?)", [platform, userindex, tableusername]);
    resultspuserprofile = resultspuserprofile[0][0];

    console.log(resultspuserprofile);
    if (!resultspuserprofile.resultstatus) return errorResponseHandler(res, 400, resultspuserprofile);

    return responseHandler(res, resultspuserprofile);
  } catch (error) {
    throw new Error(error.message);
  }
};

const updatePasswordProfil = async (req, res) => {
  const { platform, userindex, tokenlogin, userpasswordold, userpasswordnew } = req.next;

  try {
    let resultspchangepassword = await execQuery("CALL spxxxchangepassword(?, ?, ?, ?, ?)", [platform, userindex, tokenlogin, userpasswordold, userpasswordnew]);
    resultspchangepassword = resultspchangepassword[0][0];
    if (!resultspchangepassword.resultstatus) return errorResponseHandler(res, 400, resultspchangepassword);

    sendEmail({
      useremail: resultspchangepassword.resultuseremail,
      usernamefull: resultspchangepassword.resultuserfullname,
      message: "your password has been changed",
    });

    return responseHandler(res, resultspchangepassword);
  } catch (error) {
    throw new Error(error.message);
  }
};

const resetPinProfile = async (req, res) => {
  const { platform, userindex, tokenlogin, userpinnew, userpassword } = req.next;

  try {
    let resultspresetpin = await execQuery("CALL `spxxxresetpin`(?, ?, ?, ?, ?)", [platform, userindex, tokenlogin, userpinnew, userpassword]);
    resultspresetpin = resultspresetpin[0][0];

    if (!resultspresetpin.resultstatus) return errorResponseHandler(res, 400, resultspresetpin);

    sendEmail({
      useremail: resultspresetpin.resultuseremail,
      usernamefull: resultspresetpin.resultuserfullname,
      message: "your PIN has been changed",
    });

    return responseHandler(res, resultspresetpin);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  profileController,
  updateUsernameController,
  updatePasswordProfil,
  resetPinProfile,
};
