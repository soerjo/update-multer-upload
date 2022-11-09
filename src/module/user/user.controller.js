const { sendEmail } = require("../email/email.service");
const { execQuery } = require("../../configs/mysql.config");
const responseHandler = require("../../common/handler/response.handler");
const sendOtp = require("../otp/otp.service");
const ResObjectResult = require("../../common/objClass/ResObject.class");

const namespace = "AUTH_CONTROLLER";

const profileController = async (req, res) => {
  res.isnotification = false;
  res.actions = "/user/show_detail_id";
  const { userindex } = req.next;

  try {
    let resultspuserprofile = await execQuery("CALL spxxxuserprofile(?)", [userindex]);
    resultspuserprofile = resultspuserprofile[0][0];

    return responseHandler({ res, statusCode: 200, data: resultspuserprofile });
  } catch (error) {
    throw new Error(error.message);
  }
};

const changeUsernameController = async (req, res) => {
  res.isnotification = true;
  res.actions = "/user/update_username";
  const { platform, tokenlogin, tableusername } = req.next;

  try {
    let resultspuserprofile = await execQuery("CALL spxxxupdateprofile(?,?,?)", [platform, tokenlogin, tableusername]);
    resultspuserprofile = resultspuserprofile[0][0];

    if (!resultspuserprofile.resultstatus) return responseHandler({ res, statusCode: 400, objResponse: resultspuserprofile });

    sendEmail({
      res: res,
      useremail: resultspuserprofile.resultuseremail,
      subject: resultspuserprofile.resultuserfullname + ", your username has been changed",
      usernamefull: resultspuserprofile.resultuserfullname,
      message: "your username has been changed",
    });

    return responseHandler({ res, statusCode: 200, objResponse: resultspuserprofile });
  } catch (error) {
    throw new Error(error.message);
  }
};

const updatePasswordProfil = async (req, res) => {
  res.isnotification = false;
  res.actions = "/user/change_password";
  const { platform, userindex, tokenlogin, userpasswordold, userpasswordnew } = req.next;

  try {
    let resultspchangepassword = await execQuery("CALL spxxxchangepassword(?, ?, ?, ?, ?)", [platform, userindex, tokenlogin, userpasswordold, userpasswordnew]);
    resultspchangepassword = resultspchangepassword[0][0];

    if (!resultspchangepassword.resultstatus) return responseHandler({ res, statusCode: 400, objResponse: resultspchangepassword });

    sendEmail({
      res: res,
      useremail: resultspchangepassword.resultuseremail,
      subject: resultspchangepassword.resultuserfullname + ", your username has been changed",
      message: "your password has been changed",
    });

    return responseHandler({ res, statusCode: 200, objResponse: resultspchangepassword });
  } catch (error) {
    throw new Error(error.message);
  }
};

const resetPinProfile = async (req, res) => {
  res.isnotification = false;
  res.actions = "/user/insert_or_reset_pin";
  const { platform, userindex, tokenlogin, userpinnew, userpassword } = req.next;

  try {
    let resultspresetpin = await execQuery("CALL `spxxxresetpin`(?, ?, ?, ?, ?)", [platform, userindex, tokenlogin, userpinnew, userpassword]);
    console.log(resultspresetpin);
    resultspresetpin = resultspresetpin[0][0];

    if (!resultspresetpin.resultstatus) return responseHandler({ res, statusCode: 400, objResponse: resultspresetpin });

    sendEmail({
      res: res,
      useremail: resultspresetpin.resultuseremail,
      usernamefull: resultspresetpin.resultuserfullname,
      message: "your PIN has been changed",
    });

    return responseHandler({ res, objResponse: resultspresetpin });
  } catch (error) {
    throw new Error(error.message);
  }
};

const requestOtpController = async (req, res) => {
  res.isnotification = false;
  res.actions = "/user/request_otp";
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
      resultObj.resultcode = "xxx005075010";
      resultObj.resulterrormessage = "phone number has been verified";

      return responseHandler({ res, statusCode: 400, objResponse: resultObj });
    }

    console.log(new Date(), resSelectUser.tableuserphoneverificationcodenext, new Date() < resSelectUser.tableuserphoneverificationcodenext)
    if (new Date() < resSelectUser.tableuserphoneverificationcodenext) {
      console.log('HERE')
      const abs = Math.floor(Math.abs(new Date(resSelectUser.tableuserphoneverificationcodenext).getTime() - new Date().getTime()) / 1000);

      resultObj.resultstatus = 0;
      resultObj.resultcode = "xxx999999945";
      resultObj.resulterrormessage = "you can not request otp for next ### second";
      resultObj.resultcodevariable = abs;
      // resultObj.resultcodevariable = new Date(resSelectUser.tableuserphoneverificationcodenext).getTime()

      return responseHandler({ res, statusCode: 400, objResponse: resultObj });
    }

    let sixRandomNumber = "";
    for (let i = 0; i < 6; i++) {
      sixRandomNumber += Math.floor(Math.random() * 10);
    }
    let date = new Date();
    let codeOtpExpire = new Date(date.getTime() + 5 * 60 * 1000);
    let codeOtpNextRequest = new Date(date.getTime() + Math.pow(2, resSelectUser.tableuserphonenumberfailedattempt) * 30 * 1000);

    await execQuery(
      "UPDATE	xxxtableuser SET tableuserphonenumberfailedattempt = tableuserphonenumberfailedattempt + 1, tableuserphoneverificationcode = ?, tableuserphoneverificationcodetimestamp = ?, tableuserphoneverificationcodeexpiry = ?, tableuserphoneverificationcodenext= ?  WHERE tableuserindex = ?;",
      [sixRandomNumber, new Date(), codeOtpExpire, codeOtpNextRequest, userindex]
    );

    // SEND OTP
    sendOtp({
      res: res,
      otp: sixRandomNumber,
      phonenumber: resSelectUser.tableuserphonenumber,
    });

    return responseHandler({ res, objResponse: resultObj });
  } catch (error) {
    throw new Error(error.message);
  }
};

const validateOtpController = async (req, res) => {
  res.isnotification = false;
  res.actions = "/user/validate_otp";
  const resultObj = new ResObjectResult();
  const { userindex, otp } = req.next;

  try {
    let resSelectUser = await execQuery(
      "SELECT	tableuserphonenumber,  tableuserphonenumberisverified, tableuserphonenumberfailedattempt, tableuserphoneverificationcodeexpiry, tableuserphoneverificationcode FROM xxxuserlocal.xxxtableuser WHERE tableuserindex = ?;",
      [userindex]
    );
    resSelectUser = resSelectUser[0];

    if (!resSelectUser.tableuserphoneverificationcode) {
      resultObj.resultstatus = 0;
      resultObj.resultcode = "xxx999999920";
      resultObj.resulterrormessage = "please request otp first";

      return responseHandler({ res, statusCode: 400, objResponse: resultObj });
    }

    if (resSelectUser.tableuserphonenumberisverified) {
      resultObj.resultstatus = 0;
      resultObj.resultcode = "xxx005075010";
      resultObj.resulterrormessage = "phone number has been verified";

      return responseHandler({ res, statusCode: 400, objResponse: resultObj });
    }

    if (resSelectUser.tableuserphoneverificationcode !== otp) {
      resultObj.resultstatus = 0;
      resultObj.resultcode = "xxx005095015";
      resultObj.resulterrormessage = "the otp is not valid";

      // if (resSelectUser.tableuserphonenumberfailedattempt < 3) {
        const failedatempotpcount = resSelectUser.tableuserphonenumberfailedattempt + 1;
        await execQuery("UPDATE	xxxtableuser SET tableuserphonenumberfailedattempt = ?, tableuserphonenumberfailedattemptlast = ? WHERE tableuserindex = ?;", [
          failedatempotpcount,
          new Date(),
          userindex,
        ]);
        if( failedatempotpcount > 5) {
          await execQuery(`CALL spxxxsuspendotp(?)`, [userindex]);
        }
      // }

      return responseHandler({ res, statusCode: 400, objResponse: resultObj });
    }

    if (new Date() > resSelectUser.tableuserphoneverificationcodeexpiry) {
      resultObj.resultstatus = 0;
      resultObj.resultcode = "xxx005095005";
      resultObj.resulterrormessage = "the otp is expired";

      return responseHandler({ res, statusCode: 400, objResponse: resultObj });
    }

    await execQuery(
      "UPDATE	xxxtableuser SET tableuserphoneverificationcodenext = ?, tableuserphonenumberisverified = ?, tableuserphonenumberisverifiedtimestamp = ?, tableuserphonenumberfailedattempt = ?, tableuserphonenumberfailedattemptlast = ? WHERE tableuserindex = ?;",
      [ new Date(), true, new Date(), 0, new Date(), userindex]
    );

    return responseHandler({ res });
  } catch (error) {
    throw new Error(error.message);
  }
};

const changePhoneNumber = async (req, res) => {
  res.isnotification = true;
  res.actions = "/user/change_phone_number";
  const resultObj = new ResObjectResult();
  const { userindex, userphonecountrycode, userphonenumbershort } = req.next;

  try {
    let isCountryCodeValid = await execQuery("SELECT count(*) count FROM xxxtablecountryphonecode WHERE tablecountryphonecodephonecode = ?;", [userphonecountrycode]);
    isCountryCodeValid = isCountryCodeValid[0];

    if (!isCountryCodeValid.count) {
      resultObj.resultstatus = 0;
      resultObj.resultcode = "xxx0250150010";
      resultObj.resulterrormessage = "phone country code is not valid";

      return responseHandler({ res, statusCode: 400, objResponse: resultObj });
    }

    let resSpChangeNumber = await execQuery("CALL spxxxchangenumberphone(?, ?, ?);", [userphonecountrycode, userphonenumbershort, userindex]);
    resSpChangeNumber = resSpChangeNumber[0][0];
    if (!resSpChangeNumber.resultstatus) return responseHandler({ res, statusCode: 400, objResponse: resSpChangeNumber });

    return responseHandler({ res });
  } catch (error) {
    throw new Error(error.message);
  }
};

const insertchangephonenumber = async (req, res) => {
  res.isnotification = false;
  res.actions = "/user/list_phone_area_code";
  const { userindex } = req.next;

  try {
    let resListPhoneNumberCode = await execQuery("SELECT * FROM xxxtablecountryphonecode");

    let resUserPhoneNumberCode = await execQuery("SELECT tableuserphonecountrycode, tableuserphonenumbershort, tableuserphonenumber  FROM xxxtableuser WHERE tableuserindex = ?;", [userindex]);
    resUserPhoneNumberCode = resUserPhoneNumberCode[0];

    return responseHandler({ res, data: resUserPhoneNumberCode, support: resListPhoneNumberCode });
  } catch (error) {
    throw new Error(error.message);
  }
};

const changeColorController = async (req, res) => {
  res.isnotification = false;
  res.actions = "/user/change_color_theme";
  const { colorback, colorfront, userindex } = req.next;

  try {
    await execQuery("UPDATE	xxxtableuser SET tableusercolorback = ?, tableusercolorfront = ? WHERE tableuserindex = ?;", [colorback, colorfront, userindex]);

    return responseHandler({ res });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  profileController,
  changeUsernameController,
  updatePasswordProfil,
  resetPinProfile,
  requestOtpController,
  validateOtpController,
  changePhoneNumber,
  changeColorController,
  insertchangephonenumber,
};
