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
      "string.base": `"xxx005235010" referredby should be a type of 'text'`,
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
      "string.base": `"xxx999999965" tokentrans should be a type of 'text'`,
      "string.empty": `"xxx999999965" please provide tokentrans`,
      "any.required": `"xxx999999965" please provide tokentrans`,
    })
    .label("xxx999999965 tokentrans"),
})
  .required()
  .label("xxx999999990 body!");

// STORE_SCHEMA
const authStoreSchema = Joi.object({
  tokentrans: Joi.string()
    .required()
    .messages({
      "string.base": `"xxx999999965" tokentrans should be a type of 'text'`,
      "string.empty": `"xxx999999965" please provide tokentrans`,
      "any.required": `"xxx999999965" please provide tokentrans`,
    })
    .label("xxx999999965 tokentrans"),
  usernameinemail: Joi.string().email().required().label("xxx005015015 usernameinemail").messages({
    "string.base": `"xxx005015030" e user name is not valid`,
    "string.email": `"xxx005015030" e user name is not valid'`,
    "string.min": `"xxx005015020" e user name  length should more than 5 character`,
    "string.max": `"xxx005015025" e user name  length should less than 20 character`,
    "string.empty": `"xxx005015005" e please provide user name`,
    "any.required": `"xxx005015005" e please provide user name`,
  }),
  tableusername: Joi.string().min(5).max(20).required().label("xxx005015005 tableusername").messages({
    "string.base": `"xxx005015030" user name is not valid`,
    "string.min": `"xxx005015020" e user name  length should more than 5 character`,
    "string.max": `"xxx005015025" e user name  length should less than 20 character`,
    "string.empty": `"xxx005015005" please provide user name`,
    "any.required": `"xxx005015005" please provide user name`,
  }),
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
    .label("xxx005020005 fullname")
    .messages({
      "string.base": `"xxx005020010" fullname is not valid`,
      "string.empty": `"xxx005020005" please provide fullname`,
      "string.min": `"xxx005020020" fullname length should more than 5 character`,
      "string.max": `"xxx005020025" fullname length should less than 100 character`,
      "any.required": `"xxx005020005" please provide fullname`,
    }),
  userphonecountrycode: Joi.number().required().label("xxx005020005 phonecountrycode").messages({
    "number.base": `"xxx0250150010" phone country code is not valid`,
    "number.empty": `"xxx025015005" please provide phone country code`,
    "any.required": `"xxx025015005" please provide phone country code`,
  }),
  userphonenumbershort: Joi.number()
    .custom((val, helper) => {
      if (val?.toString().length < 6 || val?.toString().length > 15) return helper.message("xxx005060010 must beetwen 6 and 15 digits");
      return val;
    })
    .required()
    .label("xxx005060005 phonenumbershort")
    .messages({
      "number.base": `"xxx005060005" phone number short is not valid`,
      "number.empty": `"xxx005060005" please provide phone number short`,
      "any.required": `"xxx005060005" please provide phone number short`,
    }),
  tableuseremail: Joi.string().email().required().label("xxx005035005 email").messages({
    "string.base": `"xxx005035015" email is not valid`,
    "string.empty": `"xxx005035005" please provide email`,
    "any.required": `"xxx005035005" please provide email`,
  }),
})
  .required()
  .label("xxx999999990 body!");

// NEWPASSWORD_SCHEMA
const authNewPasswordSchema = Joi.object({
  tableuseremailverificationcode: Joi.string().required().label("xxx005040005 emailverificationcode").messages({
    "string.base": `"xxx005040010" email verification code is not valid`,
    "string.empty": `"xxx005040005" please provide email verification code`,
    "any.required": `"xxx005040005" please provide email verification code`,
  }),
  tableuserpasswordnew: Joi.string()
    .min(8)
    .max(16)
    .custom((val, helper) => {
      if (!val.match(/^[0-9a-zA-Z\.\-\_\$\&\#\@\!\*\(\)]+$/)) return helper.message("xxx005115005 only allowed alphanumeric and . - _");
      return val;
    })
    .required()
    .label("xxx005115005 tableuserpasswordnew")
    .messages({
      "string.min": `"xxx005115020" password length should more than 5 character`,
      "string.max": `"xxx005115025" password length should less than 20 character`,
      "string.base": `"xxx005115010" new password is not valid`,
      "string.empty": `"xxx005115005" please provide new password`,
      "any.required": `"xxx005115005" please provide new password`,
    }),
})
  .required()
  .unknown()
  .label("xxx999999990 body!");

// SIGNIN_SCHEMA
const signinSchema = Joi.object({
  tableusername: Joi.string().min(5).max(20).required().label("xxx005015005 tableusername").messages({
    "string.base": `"xxx005015030" user name is not valid`,
    "string.min": `"xxx005015020" user name  length should more than 5 character`,
    "string.max": `"xxx005015025" user name  length should less than 20 character`,
    "string.empty": `"xxx005015005" please provide user name`,
    "any.required": `"xxx005015005" please provide user name`,
  }),
  tableuserpassword: Joi.string().min(5).max(100).required().label("xxx005115005 password").messages({
    "string.base": `"xxx005115010" new password is not valid`,
    "string.min": `"xxx005115020" password length should more than 5 character`,
    "string.max": `"xxx005115025" password length should less than 20 character`,
    "string.empty": `"xxx005115005" please provide new password`,
    "any.required": `"xxx005115005" please provide new password`,
  }),
  latitude: Joi.number().required().label("xxx010015005 latitude"),
  longitude: Joi.number().required().label("xxx010020005 longitude"),
})
  .required()
  .unknown()
  .label("xxx999999990 body!");

// LOGOUT_SCHEMA
const logoutSchema = Joi.object({
  userindex: Joi.string().required().label("xxx005010005 userindex").messages({
    "string.base": `"xxx005010005" user index should be a type of 'text'`,
    "string.min": `"xxx005010005" user index  length should more than 5 character`,
    "string.max": `"xxx005010005" user index  length should less than 16 character`,
    "string.empty": `"xxx005010005" please provide user index`,
    "any.required": `"xxx005010005" please provide user index`,
  }),
})
  .required()
  .unknown()
  .label("xxx999999990 body!");

// FORGOT_SCHEMA
const forgotSchema = Joi.object({
  tableusername: Joi.string().min(5).max(20).required().label("xxx005015005 tableusername").messages({
    "string.base": `"xxx005015030" user name is not valid`,
    "string.min": `"xxx005015020" e user name  length should more than 5 character`,
    "string.max": `"xxx005015025" e user name  length should less than 20 character`,
    "string.empty": `"xxx005015005" please provide user name`,
    "any.required": `"xxx005015005" please provide user name`,
  }),
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
