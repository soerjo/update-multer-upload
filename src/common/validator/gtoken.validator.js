require("dotenv").config();
const axios = require("axios");
const ResObjectStats = require("../objClass/ResObjectStats.class");

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
  const objReturnData = new ResObjectStats();

  if (!req.body) {
    objReturnData.status = 0;
    objReturnData.code = "xxx999999960";
    objReturnData.errormessage = "body is not found";

    return res.status(400).send({ status: objReturnData });
  }

  // console.log(req.body);

  try {
    const { gtoken } = req.body;
    if (gtoken !== "PASSS" || !isDevMode) {
      let axiosresponse = handleGtoken(gtoken);
      if (axiosresponse.success != true || axiosresponse.success === undefined) {
        objReturnData.status = 0;
        objReturnData.code = "xxx999999960";
        objReturnData.errormessage = "xxx999999980 INVALID gtoken";
      } else if (axiosresponse.score < 0.5) {
        objReturnData.status = 0;
        objReturnData.code = "xxx999999975";
        objReturnData.errormessage = "gtoken score is too low";
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }

  if (!objReturnData.status) return res.status(400).send({ status: objReturnData });
  // next();
};

module.exports = validateGtoken;
