const { checkUserLogin } = require("../../module/user/user.service");
const responseHandler = require("../handler/response.handler");
const IdsObjClass = require("../objClass/IdsObj.class");
const UserObjClass = require("../objClass/UserObj.class");

const validateLogin = async (req, res) => {
  const { platform, userindex, tokenlogin } = req.next;
  // console.log(platform, userindex, tokenlogin);

  const checkuser = await checkUserLogin(platform, userindex, tokenlogin);

  if (!checkuser.resultstatus) return responseHandler({ res: res, statusCode: 401, objResponse: checkuser });

  const idsobj = new IdsObjClass();
  idsobj.id = checkuser.data.tableuserindex;
  idsobj.description = checkuser.data.tableusername;
  idsobj.colorback = checkuser.data.tableusercolorback;
  idsobj.colorfront = checkuser.data.tableusercolorfront;
  idsobj.imageurl = checkuser.data.tableuserphotourl;

  const userobj = new UserObjClass();
  userobj.userindex = checkuser.data.tableuserindex;
  userobj.username = checkuser.data.tableusername;
  userobj.userfullname = checkuser.data.tableuserfullname;
  userobj.userinitial = checkuser.data.tableuserinitial;
  userobj.usercolorback = checkuser.data.tableusercolorback;
  userobj.userColorfront = checkuser.data.tableusercolorfront;
  userobj.userphotoprofileurl = checkuser.data.tableuserphotourl;

  res.userobject = userobj;
  res.ids = [...res.ids, { ...idsobj }];
};

module.exports = validateLogin;
