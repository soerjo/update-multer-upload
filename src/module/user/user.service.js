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

  const isError = resultsptokenlast.resultcode !== "xxx000000000";
  resResult.resultstatus = isError ? 0 : 1;
  resResult.resultcode = resultsptokenlast.resultcode;
  resResult.resulterrormessage = isError ? "unauthorize" : "";

  if (isError) return resResult;

  let resgetuser = await execQuery("SELECT * from xxxtableuser WHERE tableuserindex = ?;", [userindex]);
  resgetuser = resgetuser[0];

  return { ...resResult, data: resgetuser };
};

module.exports = { checkUserLogin };
