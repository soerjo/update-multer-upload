const { Schema } = require("mongoose");
const { mongodb } = require("../configs/mongodb.config");

const logsSchema = new Schema({}, { strict: false });
const LogsModel = mongodb.model("logs_xxx_user", logsSchema);

module.exports = LogsModel;
