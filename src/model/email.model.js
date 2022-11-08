const { Schema } = require("mongoose");
const { mongodb } = require("../configs/mongodb.config");

const emailsSchema = new Schema({}, { strict: false });
const EmailsModel = mongodb.model("emails_xxx_user", emailsSchema);

module.exports = EmailsModel;
