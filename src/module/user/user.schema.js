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

// FORGOT_SCHEMA
const profileSchema = Joi.object({}).unknown().label("xxx999999990 body");

// UPDATE_PROFILE
const changeUsernameSchema = Joi.object({
  usernameinemail: Joi.string().email().required().label("xxx005015015 usernameinemail").messages({
    "string.base": `"xxx005015005" e user name should be a type of 'text'`,
    "string.email": `"xxx005015005" e user name is not valid'`,
    "string.min": `"xxx005015005" e user name  length should more than 5 character`,
    "string.max": `"xxx005015005" e user name  length should less than 20 character`,
    "string.empty": `"xxx005015005" e please provide user name`,
    "any.required": `"xxx005015005" e please provide user name`,
  }),
  tableusername: Joi.string().min(5).max(20).required().label("xxx005015005 tableusername").messages({
    "string.base": `"xxx005015005" user name should be a type of 'text'`,
    "string.min": `"xxx005015005" user name  length should more than 5 character`,
    "string.max": `"xxx005015005" user name  length should less than 20 character`,
    "string.empty": `"xxx005015005" please provide user name`,
    "any.required": `"xxx005015005" please provide user name`,
  }),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const updatePasswordProfileSchema = Joi.object({
  userpasswordold: Joi.string()
    .min(8)
    .max(16)
    .custom((val, helper) => {
      if (!val.match(/^[0-9a-zA-Z\.\-\_\$\&\#\@\!\*\(\)]+$/)) return helper.message("xxx005116005 only allowed alphanumeric and . - _");
      return val;
    })
    .required()
    .label("xxx005116005 tableuserpasswordnew")
    .messages({
      "string.min": `"xxx005116005" old password length should more than 5 character`,
      "string.max": `"xxx005116005" old password length should less than 20 character`,
      "string.base": `"xxx005116005" old password should be a type of 'text'`,
      "string.empty": `"xxx005116005" please provide old password`,
      "any.required": `"xxx005116005" please provide old password`,
    }),
  userpasswordnew: Joi.string()
    .min(8)
    .max(16)
    .custom((val, helper) => {
      if (!val.match(/^[0-9a-zA-Z\.\-\_\$\&\#\@\!\*\(\)]+$/)) return helper.message("xxx005117005 only allowed alphanumeric and . - _");
      return val;
    })
    .required()
    .label("xxx005117005 tableuserpasswordnew")
    .messages({
      "string.min": `"xxx005117005" new password length should more than 5 character`,
      "string.max": `"xxx005117005" new password length should less than 20 character`,
      "string.base": `"xxx005117005" new password should be a type of 'text'`,
      "string.empty": `"xxx005117005" please provide new password`,
      "any.required": `"xxx005117005" please provide new password`,
    }),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const changecolorSchema = Joi.object({
  // color: Joi.string().min(5).max(7).required().label("xxx005190005 color"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const resetPinProfileSchema = Joi.object({
  userpinnew: Joi.string().min(6).max(6).required().label("xxx005200005 pin").messages({
    "string.base": `"xxx005200005" pin should be a type of 'text'`,
    "string.min": `"xxx005200005" pin length should more than 5 character`,
    "string.max": `"xxx005200005" pin length should less than 20 character`,
    "string.empty": `"xxx005200005" please provide pin`,
    "any.required": `"xxx005200005" please provide pin`,
  }),
  userpassword: Joi.string().min(5).max(100).required().label("xxx005115005 password").messages({
    "string.base": `"xxx005115005" password should be a type of 'text'`,
    "string.min": `"xxx005115005" password length should more than 5 character`,
    "string.max": `"xxx005115005" password length should less than 20 character`,
    "string.empty": `"xxx005115005" please provide new password`,
    "any.required": `"xxx005115005" please provide new password`,
  }),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const trigerOtpSchema = Joi.object({}).required().unknown().label("xxx999999990 body");

const validateOtpSchema = Joi.object({
  otp: Joi.string().min(5).max(16).required().label("xxx005095005 otp").messages({
    "string.base": `"xxx005095005" otp should be a type of 'string'`,
    "string.empty": `"xxx005095005" please provide otp`,
    "any.required": `"xxx005095005" please provide otp`,
  }),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const changePhoneNumberSchema = Joi.object({
  userphonecountrycode: Joi.number().required().label("xxx025015005 phonecountrycode").messages({
    "number.base": `"xxx025015005" phone country code should be a type of 'number'`,
    "number.empty": `"xxx025015005" please provide phone country code`,
    "any.required": `"xxx025015005" please provide phone country code`,
  }),
  userphonenumbershort: Joi.number()
    .custom((val, helper) => {
      console.log(val.toString());
      if (val.toString().length < 7 || val.toString().length > 15) return helper.message("xxx005060005 must beetwen 7 and 15 digits");
      return val;
    })
    .required()
    .label("xxx005060005 phonenumbershort")
    .messages({
      "number.base": `"xxx005060005" phone number short should be a type of 'number'`,
      "number.empty": `"xxx005060005" please provide phone number short`,
      "any.required": `"xxx005060005" please provide phone number short`,
    }),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const insertPhoneNumberSchema = Joi.object({}).required().unknown().label("xxx999999990 body");

module.exports = {
  defaultSchema,
  // insertNewSchema,
  // authDetailSchema,
  // authStoreSchema,
  // authNewPasswordSchema,
  // signinSchema,
  // logoutSchema,
  // forgotSchema,
  profileSchema,
  changeUsernameSchema,
  updatePasswordProfileSchema,
  resetPinProfileSchema,
  trigerOtpSchema,
  validateOtpSchema,
  changePhoneNumberSchema,
  changecolorSchema,
  insertPhoneNumberSchema,
};
