const responseHandler = require("../../common/handler/response.handler");
const ResObjectResult = require("../../common/objClass/ResObject.class");
const ResObjectStats = require("../../common/objClass/ResObjectStats.class");
const { execQuery } = require("../../configs/mysql.config");
const createIdsLogsUser = require("../../utils/createIdsLogsUsers.utils");
const { sendEmail } = require("../email/email.service");

const NAMESPACE = "AUTH_CONTROLLER";

const authInsertNew = async (req, res) => {
  res.isnotification = false;
  res.actions = "/user/registration";
  const { tableuserreferredby } = req.next;

  try {
    let resultspxxxauthsignin = await execQuery("CALL spxxxuserinsertnew(?)", [tableuserreferredby]);
    resultspxxxauthsignin = resultspxxxauthsignin[0][0];
    if (!resultspxxxauthsignin.resultstatus) return responseHandler({ res, statusCode: 404, objResponse: resultspxxxauthsignin });

    return responseHandler({ res, objResponse: resultspxxxauthsignin });
  } catch (error) {
    throw new Error(error.message);
  }
};

const authDetailId = async (req, res) => {
  res.isnotification = false;
  res.actions = "/user/registration";
  const resObjResult = new ResObjectResult();
  const { tokentrans } = req.next;

  try {
    let resultspuserdetailid = await execQuery("CALL spxxxuserdetailid(?)", [tokentrans]);
    resultspuserdetailid = resultspuserdetailid[0][0];

    if (!resultspuserdetailid) {
      resObjResult.resultstatus = 0;
      resObjResult.resultcode = "xxx035020015";
      resObjResult.resulterrormessage = "tokentrans is not found";

      return responseHandler({ res, statusCode: 404, objResponse: resObjResult });
    }

    let resultgetsupport = await execQuery("SELECT * FROM xxxtablecountryphonecode;");
    resultgetsupport = resultgetsupport;

    resObjResult.resulttokentrans = resultspuserdetailid.tempusertokentrans;
    return responseHandler({ res, data: resultspuserdetailid, support: resultgetsupport, objResponse: resObjResult });
  } catch (error) {
    throw new Error(error.message);
  }
};

const authStore = async (req, res) => {
  res.isnotification = true;
  res.actions = "/user/registration";
  const resObjResult = new ResObjectStats();
  const { tokentrans, tableuserfullname, tableuserdisplayname, tableusername, tableuseremail, userphonenumbershort, userphonecountrycode } = req.next;

  // GENERAET INITIAL;
  let initialusername = tableuserfullname.split(" ");
  if (initialusername.length < 2) {
    initialusername = initialusername[0].substring(0, 2);
  } else {
    initialusername = initialusername[0].substring(0, 1) + initialusername[1].substring(0, 1);
  }
  initialusername = initialusername.toUpperCase();

  try {
    let resultspuserstore = await execQuery("CALL spxxxuserstore(?, ?, ?, ?, ?, ?, ?, ?)", [
      tokentrans,
      tableuserfullname,
      tableuserdisplayname,
      userphonecountrycode,
      userphonenumbershort,
      tableusername,
      tableuseremail,
      initialusername,
    ]);
    resultspuserstore = resultspuserstore[0][0];

    if (!resultspuserstore.resultstatus) return responseHandler({ res, statusCode: 409, objResponse: resultspuserstore });

    createIdsLogsUser(res, resultspuserstore);

    sendEmail({
      res: res,
      useremail: tableuseremail,
      subject: `Hi ${tableuserfullname}, this is your email verivication code`,
      message: `This is your email verivication code: ` + resultspuserstore.resultemailverificationcode,
    });

    return responseHandler({ res, objResponse: resultspuserstore });
  } catch (error) {
    throw new Error(error.message);
  }
};

const authNewPassword = async (req, res) => {
  res.isnotification = true;
  res.actions = "/user/register_newpassword";
  const { tableuseremailverificationcode, tableuserpasswordnew } = req.next;

  try {
    let resultspusernewpassword = await execQuery("CALL spxxxusernewpassword(?, ?)", [tableuseremailverificationcode, tableuserpasswordnew]);
    resultspusernewpassword = resultspusernewpassword[0][0];

    if (!resultspusernewpassword.resultstatus) return responseHandler({ res, statusCode: 404, objResponse: resultspusernewpassword });

    createIdsLogsUser(res, resultspusernewpassword);

    sendEmail({
      res: res,
      useremail: resultspusernewpassword?.resultemail,
      subject: `Hi ${resultspusernewpassword.tableuserfullname}, your password has been changed`,
      message: "your password has been changed " + new Date().toISOString(),
    });

    return responseHandler({ res, objResponse: resultspusernewpassword });
  } catch (error) {
    throw new Error(error.message);
  }
};

const authSigninController = async (req, res) => {
  res.isnotification = false;
  res.actions = "/user/signin";
  const { platform, tableusername, tableuserpassword, latitude, longitude, tableuserlanguage } = req.next;

  try {
    let resultspxxxauthsignin = await execQuery("CALL spxxxauthsignin(?,?,?,?,?,?)", [platform, tableusername, tableuserpassword, latitude, longitude, tableuserlanguage]);
    resultspxxxauthsignin = resultspxxxauthsignin[0][0];

    if (!resultspxxxauthsignin.resultstatus) return responseHandler({ res, statusCode: 401, objResponse: resultspxxxauthsignin });

    createIdsLogsUser(res, resultspxxxauthsignin);

    if (!resultspxxxauthsignin.resultstatus) return responseHandler({ res, statusCode: 401, objResponse: resultspxxxauthsignin });

    let resultspauthlogininfo = await execQuery("CALL spxxxauthlogininfo(?, ?)", [platform, resultspxxxauthsignin.resultindex]);
    resultspauthlogininfo = resultspauthlogininfo[0][0];

    return responseHandler({ res, objResponse: resultspxxxauthsignin, data: resultspauthlogininfo });
  } catch (error) {
    throw new Error(error.message);
  }
};

const authLogoutController = async (req, res) => {
  res.isnotification = false;
  res.actions = "/user/logout";
  const { platform, userindex } = req.next;

  try {
    let resultsplogout = await execQuery("CALL spxxxlogout(?, ?)", [platform, userindex]);
    resultsplogout = resultsplogout[0][0];

    if (!resultsplogout?.resultindex) return responseHandler({ res, statusCode: 401, objResponse: resultsplogout });

    createIdsLogsUser(res, resultsplogout);

    if (!resultsplogout?.resultstatus) return responseHandler({ res, statusCode: 409, objResponse: resultsplogout });

    return responseHandler({ res, objResponse: resultsplogout });
  } catch (error) {
    throw new Error(error.message);
  }
};

const forgotController = async (req, res) => {
  res.isnotification = true;
  res.actions = "/user/request_forgot_password";
  const { tableusername } = req.next;

  try {
    let resultspforgotpassword = await execQuery("CALL spxxxforgotnamepassword(?)", [tableusername]);
    resultspforgotpassword = resultspforgotpassword[0][0];

    if (!resultspforgotpassword.resultstatus) return responseHandler({ res, statusCode: 401, objResponse: resultspforgotpassword });

    createIdsLogsUser(res, resultspforgotpassword);

    if (!resultspforgotpassword.resultstatus) return responseHandler({ res, statusCode: 409, objResponse: resultspforgotpassword });

    sendEmail({
      res: res,
      useremail: resultspforgotpassword.resultemail,
      subject: `Hi ${resultspforgotpassword?.tableuserfullname}, this is your email verivication code`,
      message: `This is your email verivication code: ` + resultspforgotpassword.resultemailverificationcode,
    });

    return responseHandler({ res, objResponse: resultspforgotpassword });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  authInsertNew,
  authDetailId,
  authStore,
  authNewPassword,
  authSigninController,
  authLogoutController,
  forgotController,
};
