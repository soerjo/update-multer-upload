const { checkUserLogin } = require("../../module/user/user.service");
const errorResponseHandler = require("../handler/errorResponse.handler");

const validateLogin = async (req, res) => {
  const { platform, userindex, tokenlogin } = req.body;

  const isUserLogin = await checkUserLogin(platform, userindex, tokenlogin);
  if (!isUserLogin.status) return errorResponseHandler(res, 401, isUserLogin);
};

module.exports = validateLogin;
