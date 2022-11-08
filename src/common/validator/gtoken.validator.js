require("dotenv").config();
const axios = require("axios");
const responseHandler = require("../handler/response.handler");
const ErrorMessageObj = require("../objClass/ErrMessageObj.class");
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
  const objErrorMessage = new ErrorMessageObj();

  // console.log("validate gtoken");

  try {
    const { gtoken } = req.next;
    if (gtoken !== "PASSS" || !isDevMode) {
      let axiosresponse = handleGtoken(gtoken);
      if (axiosresponse.success != true || axiosresponse.success === undefined) {
        objErrorMessage.code = "xxx999999960";
        objErrorMessage.errormassage = "xxx999999985 INVALID gtoken";
        objErrorMessage.codevariable = "";

        objReturnData.resultstatus = 0;
        objReturnData.resultmessage = [objErrorMessage];
      } else if (axiosresponse.score < 0.5) {
        objErrorMessage.code = "xxx999999975";
        objErrorMessage.errormassage = "gtoken score is too low (score: ###)";
        objErrorMessage.codevariable = 0.5;

        objReturnData.resultstatus = 0;
        objReturnData.resultmessage = [objErrorMessage];
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }

  if (!objReturnData.resultstatus) return responseHandler({ res: res, statusCode: 400, objResponse: objReturnData });

  // next();
};

module.exports = validateGtoken;
