const { sendEmail } = require("../email/email.service");
const { execQuery } = require("../../configs/mysql.config");
const responseHandler = require("../../common/handler/response.handler");
const errorResponseHandler = require("../../common/handler/errorResponse.handler");
const sendOtp = require("../otp/otp.service");
const ResObjectResult = require("../../common/objClass/ResObject.class");

const namespace = "AUTH_CONTROLLER";

const profileController = async (req, res) => {
  res.action = "/user/show_detail_id";
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
  res.action = "/user/update_username";
  const { platform, userindex, tableusername } = req.next;

  try {
    let resultspuserprofile = await execQuery("CALL spxxxupdateprofile(?,?,?)", [platform, userindex, tableusername]);
    resultspuserprofile = resultspuserprofile[0][0];

    if (!resultspuserprofile.resultstatus) return errorResponseHandler(res, 400, resultspuserprofile);

    return responseHandler(res, resultspuserprofile);
  } catch (error) {
    throw new Error(error.message);
  }
};

const updatePasswordProfil = async (req, res) => {
  res.action = "/user/change_password";
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
  res.action = "/user/insert_or_reset_pin";
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

const requestOtpController = async (req, res) => {
  res.action = "/user/request_otp";
  const resultObj = new ResObjectResult();
  const { userindex } = req.next;

  try {
    let resSelectUser = await execQuery(
      "SELECT	tableuserphonenumberisverified, tableuserphonenumberfailedattempt, tableuserphoneverificationcodenext, tableuserphonenumber FROM xxxtableuser WHERE tableuserindex = ?;",
      [userindex]
    );
    resSelectUser = resSelectUser[0];

    if (resSelectUser.tableuserphonenumberisverified) {
      resultObj.resultstatus = 0;
      resultObj.resultcode = "xxx999999999";
      resultObj.resulterrormessage = "phone number has been verified";

      return errorResponseHandler(res, 400, resultObj);
    }

    if (new Date() < resSelectUser.tableuserphoneverificationcodenext) {
      resultObj.resultstatus = 0;
      resultObj.resultcode = "xxx999999999";
      resultObj.resulterrormessage = "you can not request otp for a while";

      return errorResponseHandler(res, 400, resultObj);
    }

    let sixRandomNumber = "";
    for (let i = 0; i < 6; i++) {
      sixRandomNumber += Math.floor(Math.random() * 10);
    }
    let date = new Date();
    let codeOtpExpire = new Date(date.getTime() + 60000);
    let codeOtpNextRequest = new Date(date.getTime() + Math.pow(2, resSelectUser.tableuserphonenumberfailedattempt) * 30000);

    await execQuery(
      "UPDATE	xxxtableuser SET tableuserphoneverificationcode = ?, tableuserphoneverificationcodetimestamp = ?, tableuserphoneverificationcodeexpiry = ?, tableuserphoneverificationcodenext= ?  WHERE tableuserindex = ?;",
      [sixRandomNumber, new Date(), codeOtpExpire, codeOtpNextRequest, userindex]
    );

    // SEND OTP
    const resSendOtp = await sendOtp(sixRandomNumber, resSelectUser.tableuserphonenumber);
    if (!resSendOtp.status) {
      resultObj.resultstatus = 0;
      resultObj.resultcode = "xxx999999999";
      resultObj.resulterrormessage = resSendOtp.message;

      return errorResponseHandler(res, 400, resultObj);
    }

    return responseHandler(res, resultObj);
  } catch (error) {
    throw new Error(error.message);
  }
};

const validateOtpController = async (req, res) => {
  res.action = "/user/validate_otp";
  const resultObj = new ResObjectResult();
  const { userindex, otp } = req.next;

  try {
    let resSelectUser = await execQuery(
      "SELECT	tableuserphonenumber,  tableuserphonenumberisverified, tableuserphonenumberfailedattempt, tableuserphoneverificationcodeexpiry, tableuserphoneverificationcode FROM xxxuserlocal.xxxtableuser WHERE tableuserindex = ?;",
      [userindex]
    );
    resSelectUser = resSelectUser[0];

    if (resSelectUser.tableuserphonenumberisverified) {
      resultObj.resultstatus = 0;
      resultObj.resultcode = "xxx999999999";
      resultObj.resulterrormessage = "phone number has been verified";

      return errorResponseHandler(res, 400, resultObj);
    }

    if (new Date() > resSelectUser.tableuserphoneverificationcodeexpiry) {
      resultObj.resultstatus = 0;
      resultObj.resultcode = "xxx999999000";
      resultObj.resulterrormessage = "the otp is expired";

      return errorResponseHandler(res, 400, resultObj);
    }

    if (resSelectUser.tableuserphoneverificationcode !== otp) {
      resultObj.resultstatus = 0;
      resultObj.resultcode = "xxx999999000";
      resultObj.resulterrormessage = "the otp is not valid";

      const failedatempotpcount = resSelectUser.tableuserphonenumberfailedattempt + 1;
      await execQuery("UPDATE	xxxtableuser SET tableuserphonenumberfailedattempt = ?, tableuserphonenumberfailedattemptlast = ? WHERE tableuserindex = ?;", [
        failedatempotpcount,
        new Date(),
        userindex,
      ]);

      return errorResponseHandler(res, 400, resultObj);
    }

    await execQuery(
      "UPDATE	xxxtableuser SET tableuserphonenumberisverified = ?, tableuserphonenumberisverifiedtimestamp = ?, tableuserphonenumberfailedattempt = ?, tableuserphonenumberfailedattemptlast = ? WHERE tableuserindex = ?;",
      [true, new Date(), 0, new Date(), userindex]
    );

    return responseHandler(res);
  } catch (error) {
    throw new Error(error.message);
  }
};

const changePhoneNumber = async (req, res) => {
  res.action = "/user/change_phone_number";
  const { userindex, tempuserphonecountrycode, tempuserphonenumbershort } = req.next;

  try {
    let resSpChangeNumber = await execQuery("CALL spxxxchangenumberphone(?, ?, ?);", [tempuserphonecountrycode, tempuserphonenumbershort, userindex]);
    resSpChangeNumber = resSpChangeNumber[0][0];
    if (!resSpChangeNumber.resultstatus) return errorResponseHandler(res, 400, resultspresetpin);

    return responseHandler(res);
  } catch (error) {
    throw new Error(error.message);
  }
};

const changeColorController = async (req, res) => {
  res.action = "/user/change_color_theme";
  const { colorback, colorfront, userindex } = req.next;

  try {
    await execQuery("UPDATE	xxxtableuser SET tableusercolorback = ?, tableusercolorfront = ? WHERE tableuserindex = ?;", [colorback, colorfront, userindex]);

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
  requestOtpController,
  validateOtpController,
  changePhoneNumber,
  changeColorController,
};
