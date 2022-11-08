const { Schema } = require("mongoose");
const { mongodb } = require("../configs/mongodb.config");

const otpsSchema = new Schema({}, { strict: false });
const OtpsModel = mongodb.model("otp_xxx_user", otpsSchema);

module.exports = OtpsModel;
