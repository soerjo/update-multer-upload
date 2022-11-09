const { v4: uuidv4 } = require("uuid");

const logsrequest = async (req, res) => {
  let reqbody;

  if (req.body) {
    const { tableuserpasswordnew, tableuserpassword, userpasswordold, userpasswordnew, userpassword, userpinnew, ...resreqbody } = req.body;
    reqbody = resreqbody;
  }

  res.id = uuidv4();
  res.logs = {
    method: req.method,
    url: req.url,
    ip: req.ip,
  };

  res.requestobj = {
    method: req.method,
    headers: req.headers,
    url: req.url,
    ip: req.ip,
    useragent: req.headers["user-agent"],
    query: req.query,
    params: req.params,
    body: reqbody,
  };

  res.isnotification = false;
  res.apiresponse = [];

  res.ids = [];
};

module.exports = logsrequest;
