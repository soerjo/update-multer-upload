const { execQuery } = require("../../configs/mysql.config");
const ResObjectResult = require("../../common/objClass/ResObject.class");

// CREATE USER

// UPDATE USER

// SUSPEND USER

// CHECK USER LOGIN
const checkUserLogin = async (platform, userindex, tokenlogin) => {
  const resResult = new ResObjectResult();
  let resultsptokenlast = await execQuery("CALL spxxxauthtokenlast(?,?,?)", [platform, userindex, tokenlogin]);
  resultsptokenlast = resultsptokenlast[0][0];

  return resultsptokenlast;
};

module.exports = { checkUserLogin };
