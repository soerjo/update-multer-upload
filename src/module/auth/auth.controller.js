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
  res.isnotification = true;
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

    const idsobj = new IdsObjClass();

    idsobj.id = resultspuserstore.tableuserindex;
    idsobj.description = resultspuserstore.tableusername;
    idsobj.colorback = resultspuserstore.tableusercolorback;
    idsobj.colorfront = resultspuserstore.tableusercolorfront;
    idsobj.imageurl = resultspuserstore.tableuserphotourl;

    const userobj = new UserObjClass();
    userobj.userindex = resultspuserstore.tableuserindex;
    userobj.username = resultspuserstore.tableusername;
    userobj.userfullname = resultspuserstore.tableuserfullname;
    userobj.userinitial = resultspuserstore.tableuserinitial;
    userobj.usercolorback = resultspuserstore.tableusercolorback;
    userobj.userColorfront = resultspuserstore.tableusercolorfront;
    userobj.userphotoprofileurl = resultspuserstore.tableuserphotourl;

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
  res.isnotification = true;
  res.id = uuidv4();
  res.actions = "/user/register_newpassword";
  const { tableuseremailverificationcode, tableuserpasswordnew } = req.next;

  try {
    let resultspusernewpassword = await execQuery("CALL spxxxusernewpassword(?, ?)", [tableuseremailverificationcode, tableuserpasswordnew]);
    resultspusernewpassword = resultspusernewpassword[0][0];

    if (!resultspusernewpassword.resultstatus) return responseHandler({ res, statusCode: 404, objResponse: resultspusernewpassword });

    const idsobj = new IdsObjClass();

    idsobj.id = resultspusernewpassword?.tableuserindex;
    idsobj.description = resultspusernewpassword?.tableuserfullname;
    idsobj.colorback = resultspusernewpassword?.tableusercolorback;
    idsobj.colorfront = resultspusernewpassword?.tableusercolorfront;
    idsobj.imageurl = resultspusernewpassword?.tableuserphotourl;

    const userobj = new UserObjClass();
    userobj.userindex = resultspusernewpassword?.tableuserindex;
    userobj.username = resultspusernewpassword?.tableusername;
    userobj.userfullname = resultspusernewpassword?.tableuserfullname;
    userobj.userinitial = resultspusernewpassword?.tableuserinitial;
    userobj.usercolorback = resultspusernewpassword?.tableusercolorback;
    userobj.userColorfront = resultspusernewpassword?.tableusercolorfront;
    userobj.userphotoprofileurl = resultspusernewpassword?.tableuserphotourl;

    res.userobject = userobj;
    res.ids = [...res.ids, { ...idsobj }];

    sendEmail({
      res: res,
      useremail: resultspusernewpassword?.resultemail,
      usernamefull: resultspusernewpassword.tableusername,
      message: "your password has been changed",
    });

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
    let resultspxxxauthsignin = await execQuery("CALL spxxxauthsignin(?,?,?,?,?,?)", [platform, tableusername, tableuserpassword, latitude, longitude, tableuserlanguage]);
    resultspxxxauthsignin = resultspxxxauthsignin[0][0];

    if (!resultspxxxauthsignin.resultstatus) return responseHandler({ res, statusCode: 401, objResponse: resultspxxxauthsignin });

    let idsobj = new IdsObjClass();
    idsobj.id = resultspxxxauthsignin?.tableuserindex;
    idsobj.description = resultspxxxauthsignin?.tableuserfullname;
    idsobj.colorback = resultspxxxauthsignin?.tableusercolorback;
    idsobj.colorfront = resultspxxxauthsignin?.tableusercolorfront;
    idsobj.imageurl = resultspxxxauthsignin?.tableuserphotourl;

    let userobj = new UserObjClass();
    userobj.userindex = resultspxxxauthsignin?.tableuserindex;
    userobj.username = resultspxxxauthsignin?.tableusername;
    userobj.userfullname = resultspxxxauthsignin?.tableuserfullname;
    userobj.userinitial = resultspxxxauthsignin?.tableuserinitial;
    userobj.usercolorback = resultspxxxauthsignin?.tableusercolorback;
    userobj.userColorfront = resultspxxxauthsignin?.tableusercolorfront;
    userobj.userphotoprofileurl = resultspxxxauthsignin?.tableuserphotourl;

    res.userobject = userobj;
    res.ids = [...res.ids, { ...idsobj }];

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
  res.id = uuidv4();
  res.actions = "/user/logout";
  const { platform, userindex } = req.next;

  try {
    let resultsplogout = await execQuery("CALL spxxxlogout(?, ?)", [platform, userindex]);
    resultsplogout = resultsplogout[0][0];
    console.log('OK', resultsplogout);
    if (!resultsplogout?.resultindex) return responseHandler({ res, statusCode: 401, objResponse: resultsplogout });

    let idsobj = new IdsObjClass();
    idsobj.id = resultsplogout?.tableuserindex;
    idsobj.description = resultsplogout?.tableuserfullname;
    idsobj.colorback = resultsplogout?.tableusercolorback;
    idsobj.colorfront = resultsplogout?.tableusercolorfront;
    idsobj.imageurl = resultsplogout?.tableuserphotourl;

    let userobj = new UserObjClass();
    userobj.userindex = resultsplogout?.tableuserindex;
    userobj.username = resultsplogout?.tableusername;
    userobj.userfullname = resultsplogout?.tableuserfullname;
    userobj.userinitial = resultsplogout?.tableuserinitial;
    userobj.usercolorback = resultsplogout?.tableusercolorback;
    userobj.userColorfront = resultsplogout?.tableusercolorfront;
    userobj.userphotoprofileurl = resultsplogout?.tableuserphotourl;

    res.userobject = userobj;
    res.ids = [...res.ids, { ...idsobj }];

    if (!resultsplogout?.resultstatus) return responseHandler({ res, statusCode: 409, objResponse: resultsplogout });

    return responseHandler({ res, objResponse: resultsplogout });
  } catch (error) {
    throw new Error(error.message);
  }
};

const forgotController = async (req, res) => {
  res.isnotification = true;
  res.id = uuidv4();
  res.actions = "/user/request_forgot_password";
  const { tableusername } = req.next;

  try {
    let resultspforgotpassword = await execQuery("CALL spxxxforgotnamepassword(?)", [tableusername]);
    resultspforgotpassword = resultspforgotpassword[0][0];
    
    if (!resultspforgotpassword.resultstatus) return responseHandler({ res, statusCode: 401, objResponse: resultspforgotpassword });

    let idsobj = new IdsObjClass();
    idsobj.id = resultspforgotpassword.tableuserindex;
    idsobj.description = resultspforgotpassword.tableuserfullname;
    idsobj.colorback = resultspforgotpassword.tableusercolorback;
    idsobj.colorfront = resultspforgotpassword.tableusercolorfront;
    idsobj.imageurl = resultspforgotpassword.tableuserphotourl;

    let userobj = new UserObjClass();
    userobj.userindex = resultspforgotpassword.tableuserindex;
    userobj.username = resultspforgotpassword.tableusername;
    userobj.userfullname = resultspforgotpassword.tableuserfullname;
    userobj.userinitial = resultspforgotpassword.tableuserinitial;
    userobj.usercolorback = resultspforgotpassword.tableusercolorback;
    userobj.userColorfront = resultspforgotpassword.tableusercolorfront;
    userobj.userphotoprofileurl = resultspforgotpassword.tableuserphotourl;

    res.userobject = userobj;
    res.ids = [...res.ids, { ...idsobj }];

    if (!resultspforgotpassword.resultstatus) return responseHandler({ res, statusCode: 409, objResponse: resultspforgotpassword });

    sendEmail({
      res: res,
      useremail: resultspforgotpassword.resultemail,
      usernamefull: resultspforgotpassword.tableuserfullname,
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
