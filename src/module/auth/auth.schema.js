require("dotenv").config();
const Joi = require("joi");

const defaultSchema = Joi.object({
  gtoken: Joi.string()
    .required()
    .messages({
      "string.base": `"xxx999999985" gtoken should be a type of 'text'`,
      "string.empty": `"xxx999999985" please provide gtoken`,
      "any.required": `"xxx999999985" please provide gtoken`,
    })
    .label("xxx999999985 gtoken"),
  platform: Joi.string().default("WEBSITE"),
  signature: Joi.string()
    .required()
    .messages({
      "string.base": `"xxx999999980" signature should be a type of 'text'`,
      "string.empty": `"xxx999999980" please provide signature`,
      "any.required": `"xxx999999980" please provide signature`,
    })
    .label("xxx999999980 signature"),
})
  .required()
  .unknown();

// INSERT_SCHEMA
const insertNewSchema = Joi.object({
  tableuserreferredby: Joi.string()
    .required()
    .messages({
      "string.base": `"xxx005235005" referredby should be a type of 'text'`,
      "string.empty": `"xxx005235005" please provide referredby`,
      "any.required": `"xxx005235005" please provide referredby`,
    })
    .label("xxx005235005 referredby"),
})
  .required()
  .label("xxx999999990 body!");

// DETAIL_SCHEMA
const authDetailSchema = Joi.object({
  tokentrans: Joi.string()
    .required()
    .messages({
      "string.base": `"xxx035020005" tokentrans should be a type of 'text'`,
      "string.empty": `"xxx035020005" please provide tokentrans`,
      "any.required": `"xxx035020005" please provide tokentrans`,
    })
    .label("xxx035020005 tokentrans"),
})
  .required()
  .label("xxx999999990 body!");

// STORE_SCHEMA
const authStoreSchema = Joi.object({
  tokentrans: Joi.string()
    .required()
    .messages({
      "string.base": `"xxx035020005" tokentrans should be a type of 'text'`,
      "string.empty": `"xxx035020005" please provide tokentrans`,
      "any.required": `"xxx035020005" please provide tokentrans`,
    })
    .label("xxx035020005 tokentrans"),
  usernameinemail: Joi.string()
    .email()
    .required()
    .messages({
      "string.base": `"xxx005015005" user name should be a type of 'text'`,
      "string.email": `"xxx005015005" user name is not valid'`,
      "string.min": `"xxx005015005" user name  length should more than 5 character`,
      "string.max": `"xxx005015005" user name  length should less than 20 character`,
      "string.empty": `"xxx005015005" please provide user name`,
      "any.required": `"xxx005015005" please provide user name`,
    })
    .label("xxx005015015 usernameinemail"),
  tableusername: Joi.string()
    .min(5)
    .max(20)
    .required()
    .messages({
      "string.base": `"xxx005015005" user name should be a type of 'text'`,
      "string.min": `"xxx005015005" user name  length should more than 5 character`,
      "string.max": `"xxx005015005" user name  length should less than 20 character`,
      "string.empty": `"xxx005015005" please provide user name`,
      "any.required": `"xxx005015005" please provide user name`,
    })
    .label("xxx005015005 tableusername"),
  tableuserfullname: Joi.string()
    .min(5)
    .max(100)
    .custom((val, helper) => {
      if (!val.match(/^[a-zA-Z\ ]+$/)) return helper.message("xxx005020015 fullname only allowed alphabet and white space");
      if (!val.substring(0, 1).match(/^[a-zA-Z]+$/)) return helper.message("xxx005020015 fullname start with non alphabet");
      if (!val.substring(val.length - 1, val.length).match(/^[a-zA-Z]+$/)) return helper.message("xxx005020015 fullname end with non alphabet");
      return val;
    })
    .required()
    .messages({
      "string.base": `"xxx005020005" user name should be a type of 'text'`,
      "string.empty": `"xxx005020005" please provide user name`,
      "any.required": `"xxx005020005" please provide user name`,
    })
    .label("xxx005020005 fullname"),
  userphonecountrycode: Joi.number()
    .required()
    .messages({
      "number.base": `"xxx025015005" phone country code should be a type of 'number'`,
      "number.empty": `"xxx025015005" please provide phone country code`,
      "any.required": `"xxx025015005" please provide phone country code`,
    })
    .label("xxx005020005 phonecountrycode"),
  userphonenumbershort: Joi.number()
    .custom((val, helper) => {
      if (val.toString().length < 6 || val.toString().length > 15) return helper.message("xxx005060005 must beetwen 6 and 15 digits");
      return val;
    })
    .required()
    .messages({
      "number.base": `"xxx005060005" phone number short should be a type of 'number'`,
      "number.empty": `"xxx005060005" please provide phone number short`,
      "any.required": `"xxx005060005" please provide phone number short`,
    })
    .label("xxx005190005 phonenumbershort"),
  tableuseremail: Joi.string().email().required().label("xxx005190005 email"),
})
  .required()
  .label("xxx999999990 body!");

// NEWPASSWORD_SCHEMA
const authNewPasswordSchema = Joi.object({
  tableuseremailverificationcode: Joi.string()
    .required()
    .messages({
      "number.base": `"xxx005040005" email verification code should be a type of 'text'`,
      "number.empty": `"xxx005040005" please provide email verification code`,
      "any.required": `"xxx005040005" please provide email verification code`,
    })
    .label("xxx005040005 emailverificationcode"),
  tableuserpasswordnew: Joi.string()
    .min(8)
    .max(16)
    .custom((val, helper) => {
      if (!val.match(/^[0-9a-zA-Z\.\-\_\$\&\#\@\!\*\(\)]+$/)) return helper.message("xxx005190005 only allowed alphanumeric and . - _");
      return val;
    })
    .messages({
      "string.min": `"xxx005115005" password length should more than 5 character`,
      "string.max": `"xxx005115005" password length should less than 20 character`,
      "number.base": `"xxx005115005" password should be a type of 'text'`,
      "number.empty": `"xxx005115005" please provide new password`,
      "any.required": `"xxx005115005" please provide new password`,
    })
    .required()
    .label("xxx005115005 tableuserpasswordnew"),
})
  .required()
  .unknown()
  .label("xxx999999990 body!");

// SIGNIN_SCHEMA
const signinSchema = Joi.object({
  tableusername: Joi.string()
    .min(5)
    .max(20)
    .required()
    .messages({
      "string.base": `"xxx005015005" user name should be a type of 'text'`,
      "string.min": `"xxx005015005" user name  length should more than 5 character`,
      "string.max": `"xxx005015005" user name  length should less than 20 character`,
      "string.empty": `"xxx005015005" please provide user name`,
      "any.required": `"xxx005015005" please provide user name`,
    })
    .label("xxx005190005 username"),
  tableuserpassword: Joi.string()
    .min(5)
    .max(100)
    .required()
    .messages({
      "number.base": `"xxx005115005" password should be a type of 'text'`,
      "string.min": `"xxx005115005" password length should more than 5 character`,
      "string.max": `"xxx005115005" password length should less than 20 character`,
      "number.empty": `"xxx005115005" please provide new password`,
      "any.required": `"xxx005115005" please provide new password`,
    })
    .label("xxx005115005 password"),
  latitude: Joi.number().required().label("xxx010015005 latitude"),
  longitude: Joi.number().required().label("xxx010020005 longitude"),
})
  .required()
  .unknown()
  .label("xxx999999990 body!");

// LOGOUT_SCHEMA
const logoutSchema = Joi.object({
  userindex: Joi.string()
    .min(5)
    .max(16)
    .required()
    .messages({
      "string.base": `"xxx005010005" user index should be a type of 'text'`,
      "string.min": `"xxx005010005" user index  length should more than 5 character`,
      "string.max": `"xxx005010005" user index  length should less than 16 character`,
      "string.empty": `"xxx005010005" please provide user index`,
      "any.required": `"xxx005010005" please provide user index`,
    })
    .label("xxx005010005 userindex"),
})
  .required()
  .unknown()
  .label("xxx999999990 body!");

// FORGOT_SCHEMA
const forgotSchema = Joi.object({
  tableusername: Joi.string()
    .min(5)
    .max(20)
    .required()
    .messages({
      "string.base": `"xxx005015005" user name should be a type of 'text'`,
      "string.min": `"xxx005015005" user name  length should more than 5 character`,
      "string.max": `"xxx005015005" user name  length should less than 20 character`,
      "string.empty": `"xxx005015005" please provide user name`,
      "any.required": `"xxx005015005" please provide user name`,
    })
    .label("xxx005190005 username"),
})
  .required()
  .unknown()
  .label("xxx999999990 body!");

module.exports = {
  defaultSchema,
  insertNewSchema,
  authDetailSchema,
  authStoreSchema,
  authNewPasswordSchema,
  signinSchema,
  logoutSchema,
  forgotSchema,
};
