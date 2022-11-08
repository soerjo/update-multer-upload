const { Schema } = require("mongoose");
const { mongodb } = require("../configs/mongodb.config");

const miscsSchema = new Schema({}, { strict: false });
const MiscsModel = mongodb.model("misc_xxx_user", miscsSchema);

module.exports = MiscsModel;
