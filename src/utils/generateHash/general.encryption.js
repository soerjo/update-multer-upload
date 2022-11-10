const crypto = require("crypto");
const GeneralFunction = require("./general.function");

const hashShifting = (input) => {
  return crypto.createHash("sha1").update(input).digest();
};

const inverseSubtitutiveBytes = (strings, salt, iterations, len) => {
  var key = Buffer.from(strings + salt);

  for (var i = 0; i < iterations; i++) {
    key = hashShifting(key);
  }

  if (key.length < len) {
    var hx = inverseSubtitutiveBytes(strings, salt, iterations - 1, 20);
    for (var counter = 1; key.length < len; ++counter) {
      key = Buffer.concat([key, hashShifting(Buffer.concat([Buffer.from(counter.toString()), hx]))]);
    }
  }

  return Buffer.alloc(len, key);
};

const EncryptRJ256 = (plaintext) => {
  let remarks = {
    encrypted: "",
    iv: "",
  };

  var generateIv = GeneralFunction.ivBlockRowSize(16);

  var key = inverseSubtitutiveBytes(process.env.ENC_KEY, "", 100, 32);
  var cipher = crypto.createCipheriv("aes-256-cbc", key, Buffer.from(generateIv));
  var subBytes = cipher.update(plaintext, "utf8");
  var keyAddition = cipher.final();
  var encrypted = Buffer.concat([subBytes, keyAddition]).toString("base64");

  remarks.encrypted = encrypted;
  remarks.iv = generateIv;

  return remarks;
};

const EncryptRJ1024 = (plaintext, ivBlock, ivRow) => {
  let returnencrypted = "";

  var IvSize = GeneralFunction.calculateivBlockSize(ivBlock, ivRow);
  var key = inverseSubtitutiveBytes(process.env.ENC_KEY, "", 100, 32);
  var cipher = crypto.createCipheriv("aes-256-cbc", key, Buffer.from(IvSize.substring(0, 16)));
  var subBytes = cipher.update(plaintext, "utf8");
  var keyAddition = cipher.final();
  var encrypted = Buffer.concat([subBytes, keyAddition]).toString("base64");

  returnencrypted = encrypted;

  return returnencrypted;
};

const DecryptRJ256 = (encrypted, iv_id) => {
  let remarks = {
    decrypted: "",
  };

  var key = inverseSubtitutiveBytes(process.env.ENC_KEY, "", 100, 32);
  var decipher = crypto.createDecipheriv("aes-256-cbc", key, Buffer.from(iv_id));
  var decrypted = decipher.update(encrypted, "base64", "utf8");
  decrypted += decipher.final();

  remarks.decrypted = decrypted;

  return remarks;
};

const DecryptRJ1024 = (encrypted, ivBlock, ivRow) => {
  let returndecrypted = "";

  var IvSize = GeneralFunction.calculateivBlockSize(ivBlock, ivRow);
  var key = inverseSubtitutiveBytes(process.env.ENC_KEY, "", 100, 32);
  var decipher = crypto.createDecipheriv("aes-256-cbc", key, Buffer.from(IvSize.substring(0, 16)));
  var decrypted = decipher.update(encrypted, "base64", "utf8");
  decrypted += decipher.final();

  returndecrypted = decrypted;

  return returndecrypted;
};

module.exports = {
  Encrypt: EncryptRJ256,
  Decrypt: DecryptRJ256,
  EncryptRJ1024: EncryptRJ1024,
  DecryptRJ1024: DecryptRJ1024,
};
