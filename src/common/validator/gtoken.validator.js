require("dotenv").config();
const axios = require("axios");
const errorResponseHandler = require("../handler/errorResponse.handler");
const ResObjectResult = require("../objClass/ResObject.class");

const isDevMode = process.env.MODE === "DEVELOPMENT";
const GSECRETKEY = process.env.GSECRETKEY;

const handleGtoken = async (gtoken) => {
  try {
    const url = "https://www.google.com/recaptcha/api/siteverify?secret=" + GSECRETKEY + "&response=" + gtoken;
    const responseAxiosGtoken = await axios.post(url);
    return responseAxiosGtoken.data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

const validateGtoken = async (req, res) => {
  const objReturnData = new ResObjectResult();

  if (!req.body) {
    objReturnData.resultstatus = 0;
    objReturnData.resultcode = "xxx999999960";
    objReturnData.resulterrormessage = "body is not found";

    return errorResponseHandler(res, 400, objReturnData);
  }

  try {
    const { gtoken } = req.body;
    if (gtoken !== "PASSS" || !isDevMode) {
      let axiosresponse = handleGtoken(gtoken);
      if (axiosresponse.success != true || axiosresponse.success === undefined) {
        objReturnData.resultstatus = 0;
        objReturnData.resultcode = "xxx999999960";
        objReturnData.resulterrormessage = "xxx999999980 INVALID gtoken";
      } else if (axiosresponse.score < 0.5) {
        objReturnData.resultstatus = 0;
        objReturnData.resultcode = "xxx999999975";
        objReturnData.resulterrormessage = "gtoken score is too low";
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }

  if (!objReturnData.resultstatus) return errorResponseHandler(res, 400, objReturnData);

  // next();
};

module.exports = validateGtoken;
