const { PGAsignaturegenerate, signatureisvalid } = require("../../utils/signatureCheck");
const ResObjectResult = require("../../common/objClass/ResObject.class");
const { execQuery } = require("../../configs/mysql.config");
const responseHandler = require("../../common/handler/response.handler");

const signaturegenerateV01 = async (req, res) => {
  res.action = "/system/generate_signature";
  const statObjRes = new ResObjectResult();

  try {
    let concatreqbody = "";
    for (let key in req.next) {
      concatreqbody = concatreqbody + req.next[key].toString().trim();
    }

    for (let key in req.body) {
      concatreqbody = concatreqbody + req.body[key].toString().trim();
    }

    const signature = PGAsignaturegenerate(concatreqbody);
    return responseHandler({ res, objResponse: statObjRes, data: { signature: signature, headers: req.next, body: req.body } });
  } catch (error) {
    throw new Error(error.message);
  }
};

const signatureverificationV01 = async (req, res) => {
  res.action = "/system/validate_signature";
  const statObjRes = new ResObjectResult();

  try {
    const { signature, ...reqbody } = req.next;
    let concatreqbody = "";

    for (let key in req.next) {
      concatreqbody = concatreqbody + req.next[key].toString().trim();
    }

    for (let key in reqbody) {
      concatreqbody = concatreqbody + reqbody[key].toString().trim();
    }

    const isvalid = signatureisvalid(concatreqbody, signature);
    return responseHandler({ res, objResponse: statObjRes, data: req.body });
  } catch (error) {
    throw new Error(error.message);
  }
};

const getEmailVerificationLists = async (_, res) => {
  res.action = "/system/get_mailverivication";

  try {
    let listEmailVerivication = await execQuery(
      "SELECT tableusername, tableuseremail, tableuseremailverificationcode FROM xxxtableuser WHERE tableuseremailisverified = 0 OR tableuseremailverificationcode <> '';"
    );

    return responseHandler({ res, data: listEmailVerivication });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { signaturegenerateV01, signatureverificationV01, getEmailVerificationLists };
