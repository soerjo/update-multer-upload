const IdsObjClass = require("../common/objClass/IdsObj.class");
const UserObjClass = require("../common/objClass/UserObj.class");

const createIdsLogsUser = (res, userobjparams) => {
  let idsobj = new IdsObjClass();
  idsobj.id = userobjparams?.tableuserindex;
  idsobj.description = userobjparams?.tableuserfullname;
  idsobj.colorback = userobjparams?.tableusercolorback;
  idsobj.colorfront = userobjparams?.tableusercolorfront;
  idsobj.imageurl = userobjparams?.tableuserphotourl;

  let userobj = new UserObjClass();
  userobj.userindex = userobjparams?.tableuserindex;
  userobj.username = userobjparams?.tableusername;
  userobj.userfullname = userobjparams?.tableuserfullname;
  userobj.userinitial = userobjparams?.tableuserinitial;
  userobj.usercolorback = userobjparams?.tableusercolorback;
  userobj.userColorfront = userobjparams?.tableusercolorfront;
  userobj.userphotoprofileurl = userobjparams?.tableuserphotourl;

  res.userobject = userobj;
  res.ids = [...res.ids, { ...idsobj }];
  return;
};

module.exports = createIdsLogsUser;
