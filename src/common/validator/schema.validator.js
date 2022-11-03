const Joi = require("joi");
const ResObjectStats = require("../objClass/ResObjectStats.class");

const validator = (schema) => async (req, res) => {
  const objReturnData = new ResObjectStats();

  if (!req.body) {
    objReturnData.status = 0;
    objReturnData.code = "xxx999999960";
    objReturnData.errormessage = "body is not found";

    return res.status(400).send({ status: objReturnData });
  }

  try {
    const { error, value } = await schema.validate(req.body);

    if (error) {
      objReturnData.status = error && 0;
      objReturnData.code = error && error.details.map((err) => err.message.replace(/\"/g, "").substring(0, 12))[0];
      objReturnData.errormessage = error && error.details.map((err) => err.message.replace(/\"/g, ""))[0];

      res.status(400).send({ status: objReturnData });
    }

    req.next = { ...value };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = validator;
