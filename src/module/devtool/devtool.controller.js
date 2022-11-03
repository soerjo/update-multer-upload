const { PGAsignaturegenerate, signatureisvalid } = require("../../utils/signatureCheck");

const ResObjectResult = require("../../common/objClass/ResObject.class");
const { execQuery } = require("../../configs/mysql.config");
const responseHandler = require("../../common/handler/response.handler");

const signaturegenerateV01 = async (req) => {
  const statObjRes = new ResObjectResult();

  try {
    let concatreqbody = "";
    for (let key in req.body) {
      concatreqbody = concatreqbody + req.body[key].toString().trim();
    }

    const signature = PGAsignaturegenerate(concatreqbody);
    return { status: statObjRes, signature, req_body: req.body };
  } catch (error) {
    throw new Error(error.message);
  }
};

const signatureverificationV01 = async (req) => {
  const statObjRes = new ResObjectResult();

  try {
    const { signature, ...reqbody } = req.body;
    let concatreqbody = "";
    for (let key in reqbody) {
      concatreqbody = concatreqbody + reqbody[key];
    }

    const isvalid = signatureisvalid(concatreqbody, signature);
    return { status: statObjRes, isvalid, req_body: req.body };
  } catch (error) {
    throw new Error(error.message);
  }
};

const getEmailVerificationLists = async (_, res) => {
  try {
    let listEmailVerivication = await execQuery(
      "SELECT tableusername, tableuseremail, tableuseremailverificationcode FROM xxxtableuser WHERE tableuseremailisverified = 0 OR tableuseremailverificationcode <> '';"
    );

    return responseHandler(res, {}, listEmailVerivication);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { signaturegenerateV01, signatureverificationV01, getEmailVerificationLists };
