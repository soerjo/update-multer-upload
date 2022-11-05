const axios = require("axios");
const { URLSearchParams } = require("url");

const sendOtp = async (otp, phonenumber) => {
  // try {
  //   const otpApiUrl = process.env.OTP_API_URL;
  //   const params = new URLSearchParams();
  //   params.append("usertoken_", process.env.OTP_USER_TOKEN);
  //   params.append("userkey_", process.env.OTP_USER_KEY);
  //   params.append("msisdn_", phonenumber);
  //   params.append("otp_", otp);
  //   const otpResponse = await axios.post(otpApiUrl, params);
  //   return { status: otpResponse.data.result, message: otpResponse.data.msg };
  return { status: 1, message: "ok" };
  // } catch (error) {
  //   throw new Error(error.message);
  // }
};

module.exports = sendOtp;
