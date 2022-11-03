const LogsModel = require("../../model/logs.model");

const saveLogs = async (payload) => {
  console.log(payload);
  try {
    LogsModel.create({ ...payload });
  } catch (error) {
    console.error(error);
  }
};

module.exports = saveLogs;
