const { Schema } = require("mongoose");
const { mongodb } = require("../configs/mongodb.config");

const authsSchema = new Schema({}, { strict: false });
const AuthsModel = mongodb.model("auth_xxx_user", authsSchema);

module.exports = AuthsModel;
