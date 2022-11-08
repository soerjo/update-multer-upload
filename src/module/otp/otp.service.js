const axios = require("axios");
const { URLSearchParams } = require("url");
const saveLogsOtp = require("../../common/handler/savelogsOtp.handler");
const ApiResponseObj = require("../../common/objClass/ApiResObj.class");

const sendOtp = async ({ res, otp, phonenumber }) => {
  // res.actions = [res.actions, "/otp"];
  const apiObj = new ApiResponseObj();

  try {
    const otpApiUrl = process.env.OTP_API_URL;
    const params = new URLSearchParams();
    params.append("usertoken_", process.env.OTP_USER_TOKEN);
    params.append("userkey_", process.env.OTP_USER_KEY);
    params.append("msisdn_", phonenumber);
    params.append("otp_", otp);
    const otpResponse = await axios.post(otpApiUrl, params);

    apiObj.apiName = "call OTP api";
    apiObj.timeStamp = new Date().getTime();
    apiObj.response = otpResponse?.data;
  } catch (error) {
    apiObj.apiName = "call OTP api";
    apiObj.timeStamp = new Date().getTime();
    apiObj.response = error.response?.data;
  }

  res.apiresponse = [...res.apiresponse, apiObj];
  saveLogsOtp(res);
};

module.exports = sendOtp;
