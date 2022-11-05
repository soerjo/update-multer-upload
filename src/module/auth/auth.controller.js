const errorResponseHandler = require("../../common/handler/errorResponse.handler");
const responseHandler = require("../../common/handler/response.handler");
const ResObjectResult = require("../../common/objClass/ResObject.class");
const ResObjectStats = require("../../common/objClass/ResObjectStats.class");
const { execQuery } = require("../../configs/mysql.config");
const { sendEmail } = require("../email/email.service");

const NAMESPACE = "AUTH_CONTROLLER";

const authInsertNew = async (req, res) => {
  res.actions = "/user/registration";
  const { tableuserreferredby } = req.next;

  try {
    let resultspuserinsertnew = await execQuery("CALL spxxxuserinsertnew(?)", [tableuserreferredby]);
    resultspuserinsertnew = resultspuserinsertnew[0][0];
    if (!resultspuserinsertnew.resultstatus) return responseHandler({ res, statusCode: 404, objResponse: resultspuserinsertnew });

    return responseHandler({ res, objResponse: resultspuserinsertnew });
  } catch (error) {
    throw new Error(error.message);
  }
};

const authDetailId = async (req, res) => {
  res.actions = "/user/registration";
  const resObjResult = new ResObjectStats();
  const { tokentrans } = req.next;

  try {
    let resultspuserdetailid = await execQuery("CALL spxxxuserdetailid(?)", [tokentrans]);
    resultspuserdetailid = resultspuserdetailid[0][0];

    if (resultspuserdetailid.length <= 0) {
      resObjResult.status = 0;
      resObjResult.resultcode = "xxx999999950";
      resObjResult.resulterrormessage = "NOT FOUND tokentrans";

      return responseHandler({ res, statusCode: 404, objResponse: resObjResult });
    }

    let resultgetsupport = await execQuery("SELECT * FROM xxxtablecountryphonecode;");
    resultgetsupport = resultgetsupport;

    return responseHandler({ res, data: resultspuserdetailid, support: resultgetsupport });
  } catch (error) {
    throw new Error(error.message);
  }
};

const authStore = async (req, res) => {
  res.actions = "/user/registration";
  const resObjResult = new ResObjectStats();
  const { tokentrans, tableuserfullname, tableuserdisplayname, tableusername, tableuseremail, tempuserphonecountrycode, tempuserphonenumbershort } = req.next;

  let initialusername = tableuserfullname.split(" ");
  if (initialusername.length < 2) {
    initialusername = initialusername[0].substring(0, 2);
  } else {
    initialusername = initialusername[0].substring(0, 1) + initialusername[1].substring(0, 1);
  }
  initialusername = initialusername.toUpperCase();

  try {
    let resultusernameexists = await execQuery("SELECT COUNT (*) AS tableusername FROM xxxtableuser WHERE tableusername = ? AND tableuserisactive = 1", [tableusername]);
    resultusernameexists = resultusernameexists[0];

    if (resultusernameexists.tableusername > 0) {
      resObjResult.status = 0;
      resObjResult.resultcode = "xxx065015015";
      resObjResult.resulterrormessage = "Exists username";

      return responseHandler({ res, statusCode: 409, objResponse: resObjResult });
    }

    let resultuseremailexists = await execQuery("SELECT COUNT (*) AS tableuseremail FROM xxxtableuser WHERE tableuseremail = ? AND tableuserisactive = 1", [tableuseremail]);
    resultuseremailexists = resultuseremailexists[0];

    if (resultuseremailexists.tableuseremail > 0) {
      resObjResult.status = 0;
      resObjResult.resultcode = "xxx065030020";
      resObjResult.resulterrormessage = "Exists email";

      return responseHandler({ res, statusCode: 409, objResponse: resObjResult });
    }

    let resultspuserstore = await execQuery("CALL spxxxuserstore(?, ?, ?, ?, ?, ?, ?, ?)", [
      tokentrans,
      tableuserfullname,
      tableuserdisplayname,
      tempuserphonecountrycode,
      tempuserphonenumbershort,
      tableusername,
      tableuseremail,
      initialusername,
    ]);
    resultspuserstore = resultspuserstore[0][0];

    if (!resultspuserstore.resultstatus) return responseHandler({ res, statusCode: 409, objResponse: resultspuserstore });

    sendEmail({
      useremail: tableuseremail,
      usernamefull: tableuserfullname,
      message: resultspuserstore.resultemailverificationcode,
    });

    return responseHandler({ res, objResponse: resultspuserstore });
  } catch (error) {
    throw new Error(error.message);
  }
};

const authNewPassword = async (req, res) => {
  res.actions = "/user/register_newpassword";
  const { tableuseremailverificationcode, tableuserpasswordnew } = req.next;

  try {
    let resultspusernewpassword = await execQuery("CALL spxxxusernewpassword(?, ?)", [tableuseremailverificationcode, tableuserpasswordnew]);
    resultspusernewpassword = resultspusernewpassword[0][0];

    if (!resultspusernewpassword.resultstatus) return responseHandler({ res, statusCode: 404, objResponse: resultspuserstore });

    return responseHandler({ res, objResponse: resultspusernewpassword });
  } catch (error) {
    throw new Error(error.message);
  }
};

const authSigninController = async (req, res) => {
  res.actions = "/user/signin";
  const { platform, tableusername, tableuserpassword, latitude, longitude, tableuserlanguage } = req.next;

  console.log({ platform, tableusername, tableuserpassword, latitude, longitude, tableuserlanguage });

  try {
    let resultspuserinsertnew = await execQuery("CALL spxxxauthsignin(?,?,?,?,?,?)", [platform, tableusername, tableuserpassword, latitude, longitude, tableuserlanguage]);
    resultspuserinsertnew = resultspuserinsertnew[0][0];

    if (!resultspuserinsertnew.resultstatus) return responseHandler({ res, statusCode: 401, objResponse: resultspuserinsertnew });

    let resultspauthlogininfo = await execQuery("CALL spxxxauthlogininfo(?, ?)", [platform, resultspuserinsertnew.resultindex]);
    resultspauthlogininfo = resultspauthlogininfo[0][0];

    return responseHandler({ res, objResponse: resultspuserinsertnew, data: resultspauthlogininfo });
  } catch (error) {
    throw new Error(error.message);
  }
};

const authLogoutController = async (req, res) => {
  res.actions = "/user/logout";
  const { platform, userindex } = req.next;

  try {
    let resultsplogout = await execQuery("CALL spxxxlogout(?, ?)", [platform, userindex]);
    resultsplogout = resultsplogout[0][0];

    if (!resultsplogout.resultstatus) return responseHandler({ res, statusCode: 409, objResponse: resultsplogout });

    return responseHandler({ res, objResponse: resultsplogout });
  } catch (error) {
    throw new Error(error.message);
  }
};

const forgotController = async (req, res) => {
  res.actions = "/user/request_forgot_password";
  const { tableusername } = req.next;

  try {
    let resultspforgotpassword = await execQuery("CALL spxxxforgotnamepassword(?)", [tableusername]);
    resultspforgotpassword = resultspforgotpassword[0][0];

    if (!resultspforgotpassword.resultstatus) return responseHandler({ res, statusCode: 409, objResponse: resultspforgotpassword });

    sendEmail({
      useremail: resultspforgotpassword.resultemail,
      usernamefull: tableusername,
      message: resultspforgotpassword.resultemailverificationcode,
    });

    return responseHandler({ res, objResponse: resultspforgotpassword });
  } catch (error) {
    throw new Error(error.message);
  }
};

const isLogin = async (req, res) => {
  const resResult = new ResObjectResult();
  const { platform, tokenlogin } = req.body;

  try {
    let userindex = "";
    let username = "";
    if (platform != "WEBSITE") {
      let resultselectuser = await execQuery("SELECT tableuserindex, tableusername FROM xxxtableuser WHERE tableuserapptoken = ?", [tokenlogin]);
      resultselectuser = resultselectuser[0];

      userindex = resultselectuser.tableuserindex;
      username = resultselectuser.tableusername;
    } else {
      let resultselectuser = await execQuery("SELECT tableuserindex, tableusername FROM xxxtableuser WHERE tableuserwebtoken = ?", [tokenlogin]);
      resultselectuser = resultselectuser[0];

      userindex = resultselectuser.tableuserindex;
      username = resultselectuser.tableusername;
    }

    return responseHandler({ res, objResponse: resultspforgotpassword, data: { userindex, username } });
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
  isLogin,
};
