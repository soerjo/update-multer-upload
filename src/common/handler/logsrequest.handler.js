const logsrequest = async (req, res) => {
  let reqbody;
  if (req.body) {
    const { tableuserpasswordnew, tableuserpassword, userpasswordold, userpasswordnew, userpassword, userpinnew, ...resreqbody } = req.body;
    reqbody = resreqbody;
  }

  const logRequestObj = {
    method: req.method,
    url: req.url,
    ip: req.ip,
    timestamp: new Date().getTime(),
    date: new Date().toISOString(),
  };
  res.logs = {
    logRequestObj,
    request: {
      method: req.method,
      url: req.url,
      ip: req.ip,
      "user-agent": req.headers["user-agent"],
      query: req.query,
      params: req.params,
      body: reqbody,
    },
  };
};

module.exports = logsrequest;
