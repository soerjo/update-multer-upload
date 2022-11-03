require("dotenv").config();
const crypto = require("crypto");

const signatureisvalid = (parameters, signature) => {
  if (!signature || !parameters) {
    return false;
  } else {
    let hmac = crypto.createHmac("sha256", process.env.SECRETKEY);
    hmacdata = hmac.update(parameters);
    gen_hmac = hmacdata.digest("hex");

    if (signature != gen_hmac) return false;
  }
  return true;
};

const PGAsignaturegenerate = (SIGNATURE_PATTERN) => {
  let returntemp = "";
  let hmac = crypto.createHmac("sha256", process.env.SECRETKEY);
  hmacdata = hmac.update(SIGNATURE_PATTERN);
  gen_hmac = hmacdata.digest("hex");
  returntemp = gen_hmac;

  return returntemp;
};

module.exports = { signatureisvalid, PGAsignaturegenerate };
