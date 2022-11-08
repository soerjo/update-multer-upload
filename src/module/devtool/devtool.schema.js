require("dotenv").config();
const Joi = require("joi");

const defaultSchema = Joi.object().unknown();

module.exports = { defaultSchema };
