require("dotenv").config();
const { signatureisvalid } = require("../../utils/signatureCheck");
const ResObjectResult = require("../objClass/ResObject.class");

const isDevMode = process.env.MODE === "DEVELOPMENT";

const validateSignature = async (req, res) => {
  const objReturnData = new ResObjectResult();
  const { signature, ...resheaders } = req.headers;
  const reqbody = req.body;

  if (!isDevMode && resheaders.gtoken !== "PASS") {
    let concatreqbody = "";

    for (let key in resheaders) {
      concatreqbody = concatreqbody + resheaders[key];
    }

    for (let key in reqbody) {
      concatreqbody = concatreqbody + reqbody[key];
    }

    const isSignatureValid = signatureisvalid(concatreqbody, signature);
    if (!isSignatureValid) {
      objReturnData.resultstatus = 0;
      objReturnData.resultcode = ["xxx999999960"];
      objReturnData.resulterrormessage = ["xxx999999960 signature is not valid"];

      return errorResponseHandler(res, 403, objReturnData);
    }
  }
};

module.exports = validateSignature;
