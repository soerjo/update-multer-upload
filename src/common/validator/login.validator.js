const { execQuery } = require("../../configs/mysql.config");
const responseHandler = require("../handler/response.handler");
const IdsObjClass = require("../objClass/IdsObj.class");
const UserObjClass = require("../objClass/UserObj.class");

const validateLogin = async (req, res) => {
  const { platform, userindex, tokenlogin } = req.next;

  let checkuser = await execQuery("CALL spxxxauthtokenlast(?,?,?)", [platform, userindex, tokenlogin]);
  checkuser = checkuser[0][0];

  if (!checkuser.resultstatus) return responseHandler({ res: res, objResponse: checkuser });

  const idsobj = new IdsObjClass();
  idsobj.id = checkuser.tableuserindex;
  idsobj.description = checkuser.tableuserfullname;
  idsobj.colorback = checkuser.tableusercolorback;
  idsobj.colorfront = checkuser.tableusercolorfront;
  idsobj.imageurl = checkuser.tableuserphotourl;

  const userobj = new UserObjClass();
  userobj.userindex = checkuser.tableuserindex;
  userobj.username = checkuser.tableusername;
  userobj.userfullname = checkuser.tableuserfullname;
  userobj.userinitial = checkuser.tableuserinitial;
  userobj.usercolorback = checkuser.tableusercolorback;
  userobj.userColorfront = checkuser.tableusercolorfront;
  userobj.userphotoprofileurl = checkuser.tableuserphotourl;

  res.userobject = userobj;
  res.ids = [...res.ids, { ...idsobj }];
};

module.exports = validateLogin;
