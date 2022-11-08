require("dotenv").config();
const Joi = require("joi");

const defaultSchema = Joi.object({
  gtoken: Joi.string().required().label("xxx999999985 gtoken"),
  platform: Joi.string().default("WEBSITE"),
  signature: Joi.string().required().label("xxx999999980 signature"),
  userindex: Joi.string().min(5).max(16).required().label("xxx005190005 userindex"),
  tokenlogin: Joi.string().required().label("xxx005190005 tokenlogin"),
})
  .required()
  .unknown()

const validateParams = Joi.object({
  page: Joi.number().min(0).required(),
  limit: Joi.number().min(0).max(30).required(),
})
  .required()
  .unknown()
  .label("xxx999999980 params");

module.exports = {
  defaultSchema,
  validateParams,
};
