require("dotenv").config();
const axios = require("axios");
const responseHandler = require("../handler/response.handler");
const ResObjectResult = require("../objClass/ResObject.class");

const isDevMode = process.env.MODE === "DEVELOPMENT";
const GSECRETKEY = process.env.GSECRETKEY;

const handleGtoken = async (gtoken) => {
  try {
    const url = "https://www.google.com/recaptcha/api/siteverify?secret=" + GSECRETKEY + "&response=" + gtoken;
    const responseAxiosGtoken = await axios.post(url);
    return responseAxiosGtoken.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const validateGtoken = async (req, res) => {
  const objReturnData = new ResObjectResult();

  try {
    const { gtoken } = req.headers;
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

  if (!objReturnData.resultstatus) return responseHandler({ res: res, statusCode: 400, objResponse: objReturnData });

  // next();
};

module.exports = validateGtoken;
