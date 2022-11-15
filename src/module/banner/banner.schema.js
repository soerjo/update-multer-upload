require("dotenv").config();
const Joi = require("joi");

const defaultSchema = Joi.object({
  gtoken: Joi.string().required().label("xxx999999985 gtoken").messages({
    "string.base": `"xxx999999985" gtoken should be a type of 'text'`,
    "string.empty": `"xxx999999985" please provide gtoken`,
    "any.required": `"xxx999999985" please provide gtoken`,
  }),
  platform: Joi.string().default("WEBSITE"),
  signature: Joi.string().required().label("xxx999999980 signature").messages({
    "string.base": `"xxx999999980" signature should be a type of 'text'`,
    "string.empty": `"xxx999999980" please provide signature`,
    "any.required": `"xxx999999980" please provide signature`,
  }),
  userindex: Joi.string().min(5).max(16).required().label("xxx005010005 user index").messages({
    "string.base": `"xxx005010005" user index should be a type of 'text'`,
    "string.empty": `"xxx005010005" please provide user index`,
    "any.required": `"xxx005010005" please provide user index`,
  }),
  tokenlogin: Joi.string().required().label("xxx999999971 tokenlogin").messages({
    "string.base": `"xxx999999971" tokenlogin should be a type of 'text'`,
    "string.empty": `"xxx999999971" please provide tokenlogin`,
    "any.required": `"xxx999999971" please provide tokenlogin`,
  }),
})
  .required()
  .unknown();

const uploadSchema = Joi.object({
  publish_date: Joi.date().required().label("xxx025015005 publish_date"),
  end_date: Joi.date().required().label("xxx025015005 end_date"),
  description: Joi.string().required().label("xxx025015005 description"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const changeSchema = Joi.object({
  tablebannerindex: Joi.string().required().label("xxx025015005 tablebannerindex"),
  publish_date: Joi.date().required().label("xxx025015005 publish_date"),
  end_date: Joi.date().required().label("xxx025015005 end_date"),
  description: Joi.string().required().label("xxx025015005 description"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const inactiveSchema = Joi.object({
  tablebannerindex: Joi.string().required().label("xxx025015005 tablebannerindex"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

module.exports = { uploadSchema, changeSchema, inactiveSchema };
