// const axios = require("axios");
const { URLSearchParams } = require("url");
const ApiResponseObj = require("../../common/objClass/ApiResObj.class");

const sendOtp = async ({ res, otp, phonenumber }) => {
  const apiObj = new ApiResponseObj();

  // try {
  //   const otpApiUrl = process.env.OTP_API_URL;
  //   const params = new URLSearchParams();
  //   params.append("usertoken_", process.env.OTP_USER_TOKEN);
  //   params.append("userkey_", process.env.OTP_USER_KEY);
  //   params.append("msisdn_", phonenumber);
  //   params.append("otp_", otp);
  //   const otpResponse = await axios.post(otpApiUrl, params);
  //   return { status: otpResponse.data.result, message: otpResponse.data.msg };

  apiObj.apiName = "call otp api";
  apiObj.timeStamp = new Date().getTime();
  // apiObj.response = otpResponse.data;

  res.apiresponse = [...res.apiresponse, apiObj];
  return { status: 1, message: "ok" };
  // } catch (error) {
  //   throw new Error(error.message);
  // }
};

module.exports = sendOtp;
