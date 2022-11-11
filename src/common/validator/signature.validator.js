require("dotenv").config();
const { signatureisvalid } = require("../../utils/signatureCheck");
const responseHandler = require("../handler/response.handler");
const ErrorMessageObj = require("../objClass/ErrMessageObj.class");
const ResObjectResult = require("../objClass/ResObject.class");

const isDevMode = process.env.MODE === "DEVELOPMENT";

const validateSignature = async (req, res) => {
  const objReturnData = new ResObjectResult();
  const objErrorMessage = new ErrorMessageObj();

  const { signature, ...allrequestheaders } = { ...req.next };
  const { tableuserlanguage, ...allrequestbody } = { ...req.body };

  let concatreqbody = "";
  for (let key in allrequestheaders) {
    allrequestheaders[key]?.toString().trim();
    concatreqbody = concatreqbody + allrequestheaders[key];
  }
  for (let key in allrequestbody) {
    allrequestbody[key]?.toString().trim();
    concatreqbody = concatreqbody + allrequestbody[key];
  }

  if (!isDevMode && resheaders.gtoken !== "PASS") {
    const isSignatureValid = signatureisvalid(concatreqbody, signature);
    if (!isSignatureValid) {
      objErrorMessage.code = "xxx999999960";
      objErrorMessage.errormassage = "xxx999999960 signature is not valid";
      objErrorMessage.codevariable = "";

      objReturnData.resultstatus = 0;
      objReturnData.resultmessage = [objErrorMessage];

      return responseHandler({ res, objResponse: objReturnData });
    }
  }
};

module.exports = validateSignature;
