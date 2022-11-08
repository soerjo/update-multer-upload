const { v4: uuidv4 } = require("uuid");

const responseHandler = require("../../common/handler/response.handler");
const IdsObjClass = require("../../common/objClass/IdsObj.class");
const ResObjectResult = require("../../common/objClass/ResObject.class");
const ResObjectStats = require("../../common/objClass/ResObjectStats.class");
const UserObjClass = require("../../common/objClass/UserObj.class");
const { execQuery } = require("../../configs/mysql.config");
const { sendEmail } = require("../email/email.service");

const NAMESPACE = "AUTH_CONTROLLER";

const authInsertNew = async (req, res) => {
  res.isnotification = false;
  res.id = uuidv4();
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
  res.isnotification = false;
  res.id = uuidv4();
  res.actions = "/user/registration";
  const resObjResult = new ResObjectResult();
  const { tokentrans } = req.next;

  try {
    let resultspuserdetailid = await execQuery("CALL spxxxuserdetailid(?)", [tokentrans]);
    resultspuserdetailid = resultspuserdetailid[0];

    if (resultspuserdetailid.length <= 0) {
      resObjResult.resultstatus = 0;
      resObjResult.resultcode = "xxx999999965";
      resObjResult.resulterrormessage = "NOT FOUND tokentrans";

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
  res.isnotification = true; // NOTIFICATION IT SHOULD BE TRUE
  res.id = uuidv4();
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
    let resultselecttokentrans = await execQuery(
      "SELECT count(*) count FROM xxxtempuser WHERE tempusertokentrans = ? AND tempuserindex = '' AND TIMESTAMPDIFF(SECOND, tempuserinserttimestamp, NOW()) < 900;",
      [tokentrans]
    );
    resultselecttokentrans = resultselecttokentrans[0];

    if (!resultselecttokentrans.count) {
      resObjResult.resultstatus = 0;
      resObjResult.resultcode = "xxx999999000";
      resObjResult.resulterrormessage = "token trans not valid";

      return responseHandler({ res, statusCode: 400, objResponse: resObjResult });
    }

    let isCountryCodeValid = await execQuery("SELECT count(*) count FROM xxxtablecountryphonecode WHERE tablecountryphonecodephonecode = ?;", [userphonecountrycode]);
    isCountryCodeValid = isCountryCodeValid[0];

    if (!isCountryCodeValid.count) {
      resObjResult.resultstatus = 0;
      resObjResult.resultcode = "xxx999999000";
      resObjResult.resulterrormessage = "country code is not valid";

      return responseHandler({ res, statusCode: 400, objResponse: resObjResult });
    }

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
      userphonecountrycode,
      userphonenumbershort,
      tableusername,
      tableuseremail,
      initialusername,
    ]);
    resultspuserstore = resultspuserstore[0][0];

    if (!resultspuserstore.resultstatus) return responseHandler({ res, statusCode: 409, objResponse: resultspuserstore });

    let resultSelectUserTable = await execQuery("SELECT * FROM xxxtableuser WHERE tableuserindex = ?;", [resultspuserstore.resultindex]);
    resultSelectUserTable = resultSelectUserTable[0];

    const idsobj = new IdsObjClass();

    idsobj.id = resultSelectUserTable.tableuserindex;
    idsobj.description = resultSelectUserTable.tableusername;
    idsobj.colorback = resultSelectUserTable.tableusercolorback;
    idsobj.colorfront = resultSelectUserTable.tableusercolorfront;
    idsobj.imageurl = resultSelectUserTable.tableuserphotourl;

    const userobj = new UserObjClass();
    userobj.userindex = resultSelectUserTable.tableuserindex;
    userobj.username = resultSelectUserTable.tableusername;
    userobj.userfullname = resultSelectUserTable.tableuserfullname;
    userobj.userinitial = resultSelectUserTable.tableuserinitial;
    userobj.usercolorback = resultSelectUserTable.tableusercolorback;
    userobj.userColorfront = resultSelectUserTable.tableusercolorfront;
    userobj.userphotoprofileurl = resultSelectUserTable.tableuserphotourl;

    res.userobject = userobj;
    res.ids = [...res.ids, { ...idsobj }];

    sendEmail({
      res: res,
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
  res.isnotification = false;
  res.id = uuidv4();
  res.actions = "/user/register_newpassword";
  const { tableuseremailverificationcode, tableuserpasswordnew } = req.next;

  try {
    let resultspusernewpassword = await execQuery("CALL spxxxusernewpassword(?, ?)", [tableuseremailverificationcode, tableuserpasswordnew]);
    resultspusernewpassword = resultspusernewpassword[0][0];

    if (!resultspusernewpassword.resultstatus) return responseHandler({ res, statusCode: 404, objResponse: resultspusernewpassword });

    let resultSelectUserTable = await execQuery("SELECT * FROM xxxtableuser WHERE tableuserindex = ?;", [resultspusernewpassword.resultindex]);
    resultSelectUserTable = resultSelectUserTable[0];

    const idsobj = new IdsObjClass();

    idsobj.id = resultSelectUserTable.tableuserindex;
    idsobj.description = resultSelectUserTable.tableusername;
    idsobj.colorback = resultSelectUserTable.tableusercolorback;
    idsobj.colorfront = resultSelectUserTable.tableusercolorfront;
    idsobj.imageurl = resultSelectUserTable.tableuserphotourl;

    const userobj = new UserObjClass();
    userobj.userindex = resultSelectUserTable.tableuserindex;
    userobj.username = resultSelectUserTable.tableusername;
    userobj.userfullname = resultSelectUserTable.tableuserfullname;
    userobj.userinitial = resultSelectUserTable.tableuserinitial;
    userobj.usercolorback = resultSelectUserTable.tableusercolorback;
    userobj.userColorfront = resultSelectUserTable.tableusercolorfront;
    userobj.userphotoprofileurl = resultSelectUserTable.tableuserphotourl;

    res.userobject = userobj;
    res.ids = [...res.ids, { ...idsobj }];

    return responseHandler({ res, objResponse: resultspusernewpassword });
  } catch (error) {
    throw new Error(error.message);
  }
};

const authSigninController = async (req, res) => {
  res.isnotification = false;
  res.id = uuidv4();
  res.actions = "/user/signin";
  const { platform, tableusername, tableuserpassword, latitude, longitude, tableuserlanguage } = req.next;

  try {
    let resultspuserinsertnew = await execQuery("CALL spxxxauthsignin(?,?,?,?,?,?)", [platform, tableusername, tableuserpassword, latitude, longitude, tableuserlanguage]);
    resultspuserinsertnew = resultspuserinsertnew[0][0];
    console.log(resultspuserinsertnew);
    if (!resultspuserinsertnew.resultstatus) return responseHandler({ res, statusCode: 401, objResponse: resultspuserinsertnew });

    let resultspauthlogininfo = await execQuery("CALL spxxxauthlogininfo(?, ?)", [platform, resultspuserinsertnew.resultindex]);
    resultspauthlogininfo = resultspauthlogininfo[0][0];

    const idsobj = new IdsObjClass();
    idsobj.id = resultspauthlogininfo.tableuserindex;
    idsobj.description = resultspauthlogininfo.tableusername;
    idsobj.colorback = resultspauthlogininfo.tableusercolorback;
    idsobj.colorfront = resultspauthlogininfo.tableusercolorfront;
    idsobj.imageurl = resultspauthlogininfo.tableuserphotourl;

    const userobj = new UserObjClass();
    userobj.userindex = resultspauthlogininfo.tableuserindex;
    userobj.username = resultspauthlogininfo.tableusername;
    userobj.userfullname = resultspauthlogininfo.tableuserfullname;
    userobj.userinitial = resultspauthlogininfo.tableuserinitial;
    userobj.usercolorback = resultspauthlogininfo.tableusercolorback;
    userobj.userColorfront = resultspauthlogininfo.tableusercolorfront;
    userobj.userphotoprofileurl = resultspauthlogininfo.tableuserphotourl;

    res.userobject = userobj;
    res.ids = [...res.ids, { ...idsobj }];

    return responseHandler({ res, objResponse: resultspuserinsertnew, data: resultspauthlogininfo });
  } catch (error) {
    throw new Error(error.message);
  }
};

const authLogoutController = async (req, res) => {
  res.isnotification = false;
  res.id = uuidv4();
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
  res.isnotification = false;
  res.id = uuidv4();
  res.actions = "/user/request_forgot_password";
  const { tableusername } = req.next;

  try {
    let resultspforgotpassword = await execQuery("CALL spxxxforgotnamepassword(?)", [tableusername]);
    resultspforgotpassword = resultspforgotpassword[0][0];

    if (!resultspforgotpassword.resultstatus) return responseHandler({ res, statusCode: 409, objResponse: resultspforgotpassword });

    await sendEmail({
      res: res,
      useremail: resultspforgotpassword.resultemail,
      usernamefull: tableusername,
      message: resultspforgotpassword.resultemailverificationcode,
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
