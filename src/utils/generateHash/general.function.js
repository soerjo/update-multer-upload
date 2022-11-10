const crypto = require("crypto");

const locatorZero = (x, n) => {
  while (x.toString().length < n) {
    x = "0" + x;
  }
  return x;
};

const calculateivBlockSize = (ivBlockSize, ivRowSize) => {
  let hmac = crypto.createHmac("sha256", ivRowSize);
  hmacdata = hmac.update(ivBlockSize);
  gen_hmac = hmacdata.digest("hex");

  return gen_hmac;
};

const ivBlockRowSize = (length) => {
  let result = "";

  var seed = "alnum";

  var seeding = {
    alpha: "abcdefghijklmnopqrstuvwqyz",
    numeric: "0123456789",
    alphanum: "ab0cde1fg2hi3jk4lmn5opq6rs7tuv8wq9yz",
    alnum: "YZab0ABcde1CDEfg2FGhi3HIjk4JKlmn5LMNopq6OPQrs7RStuv8TUVwq9WQyz",
    hexidec: "0123456789abcdef",
  };

  seed = seeding[seed];

  const charactersLength = seed.length;
  for (let i = 0; i < length; i++) {
    result += seed.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

module.exports = {
  ivBlockRowSize: ivBlockRowSize,
  calculateivBlockSize: calculateivBlockSize,
};
