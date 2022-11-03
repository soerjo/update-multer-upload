const { Schema } = require("mongoose");
const { mongodb } = require("../configs/mongodb.config");

const logsSchema = new Schema({}, { strict: false });
const LogsModel = mongodb.model("LogsEmail", logsSchema);

module.exports = LogsModel;
