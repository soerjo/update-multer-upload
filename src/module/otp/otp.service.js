const axios = require("axios");
const { URLSearchParams } = require("url");
const saveLogsOtp = require("../../common/handler/savelogsOtp.handler");
const ApiResponseObj = require("../../common/objClass/ApiResObj.class");

const sendOtp = async ({ res, otp, phonenumber }) => {
  // res.actions = [res.actions, "/otp"];
  // const apiObj = new ApiResponseObj();
  // try {
  //   const otpApiUrl = process.env.OTP_API_URL;
  //   const params = new URLSearchParams();
  //   params.append("usertoken_", process.env.OTP_USER_TOKEN);
  //   params.append("userkey_", process.env.OTP_USER_KEY);
  //   params.append("msisdn_", phonenumber);
  //   params.append("otp_", otp);
  //   const otpResponse = await axios.post(otpApiUrl, params);
  //   const logsError = {
  //     status: otpResponse?.status,
  //     statusText: otpResponse?.statusText,
  //     method: otpResponse?.config?.method,
  //     url: otpResponse?.config?.url,
  //     data: otpResponse?.config?.data,
  //     bodyresponse: otpResponse?.data,
  //   };
  //   apiObj.apiName = "call OTP api";
  //   apiObj.timeStamp = new Date().getTime();
  //   apiObj.response = logsError;
  // } catch (error) {
  //   const logsError = {
  //     status: error.response?.status,
  //     statusText: error.response?.statusText,
  //     method: error.response?.config?.method,
  //     url: error.response?.config?.url,
  //     data: error.response?.config?.data,
  //     bodyresponse: error?.response?.data,
  //   };
  //   apiObj.apiName = "call OTP api";
  //   apiObj.timeStamp = new Date().getTime();
  //   apiObj.response = logsError;
  // }
  // res.apiresponse = [...res.apiresponse, apiObj];
  // saveLogsOtp(res);
};

module.exports = sendOtp;
