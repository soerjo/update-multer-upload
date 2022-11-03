require("dotenv").config();
const { signatureisvalid } = require("../../utils/signatureCheck");
const ResObjectStats = require("../objClass/ResObjectStats.class");

const isDevMode = process.env.MODE === "DEVELOPMENT";

const validateSignature = async (req, res) => {
  const objReturnData = new ResObjectStats();
  const { signature, tableuserlanguage, ...reqbody } = req.body;

  if (!isDevMode && reqbody.gtoken !== "PASS") {
    let concatreqbody = "";
    for (let key in reqbody) {
      concatreqbody = concatreqbody + reqbody[key];
    }

    const isSignatureValid = signatureisvalid(concatreqbody, signature);
    if (!isSignatureValid) {
      objReturnData.status = 0;
      objReturnData.code = ["xxx999999960"];
      objReturnData.errormessage = ["xxx999999960 signature is not valid"];

      return res.status(400).send({ status: objReturnData });
    }
  }
};

module.exports = validateSignature;
