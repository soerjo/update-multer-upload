require("dotenv").config();
const Joi = require("joi");

const defaultSchema = {
  gtoken: Joi.string().label("xxx999999980 gtoken"),
  platform: Joi.string().default("WEBSITE"),
  signature: Joi.string().required().label("xxx999999955 signature"),
};

// INSERT_SCHEMA
const insertNewSchema = Joi.object({
  ...defaultSchema,
  tableuserreferredby: Joi.string().required().label("xxx005190005 referredby"),
})
  .required()
  .label("xxx999999980 body");

// DETAIL_SCHEMA
const authDetailSchema = Joi.object({
  ...defaultSchema,
  tokentrans: Joi.string().required().label("xxx005190005 tokentrans"),
})
  .required()
  .label("xxx999999980 body");

// STORE_SCHEMA
const authStoreSchema = Joi.object({
  ...defaultSchema,
  tokentrans: Joi.string().required().label("xxx005190005 tokentrans"),
  tableusername: Joi.string()
    .min(5)
    .max(20)
    .custom((val, helper) => {
      if (!val.match(/^[0-9a-zA-Z\.\-\_]+$/)) return helper.message("xxx005190005 only allowed alphanumeric and . - _");
      if (!val.substring(0, 1).match(/^[a-zA-Z]+$/)) return helper.message("xxx005190005 start with non alphabet");
      if (!val.substring(val.length - 1, val.length).match(/^[a-zA-Z]+$/)) return helper.message("xxx005190005 end with non alphabet");
      return val;
    })
    .required()
    .label("xxx005190005 tableusername"),
  tableuserfullname: Joi.string()
    .min(5)
    .custom((val, helper) => {
      if (!val.match(/^[a-zA-Z\ ]+$/)) return helper.message("xxx005190005 only allowed alphabet and white space");
      if (!val.substring(0, 1).match(/^[a-zA-Z]+$/)) return helper.message("xxx005190005 start with non alphabet");
      if (!val.substring(val.length - 1, val.length).match(/^[a-zA-Z]+$/)) return helper.message("xxx005190005 end with non alphabet");
      return val;
    })
    .max(100)
    .label("xxx005190005 fullname")
    .required(),
  tempuserphonecountrycode: Joi.number().required().label("xxx005190005 phonecountrycode"),
  tempuserphonenumbershort: Joi.number()
    .custom((val, helper) => {
      console.log(val.toString());
      if (val.toString().length < 7 || val.toString().length > 15) return helper.message("xxx005190005 must beetwen 7 and 15 digits");
      return val;
    })
    .required()
    .label("xxx005190005 phonenumbershort"),
  tableuseremail: Joi.string().email().required().label("xxx005190005 email"),
})
  .required()
  .label("xxx999999980 body");

// NEWPASSWORD_SCHEMA
const authNewPasswordSchema = Joi.object({
  ...defaultSchema,
  tableuseremailverificationcode: Joi.string().required().label("xxx065035010 emailverificationcode"),
  tableuserpasswordnew: Joi.string()
    .min(8)
    .max(16)
    .custom((val, helper) => {
      if (!val.match(/^[0-9a-zA-Z\.\-\_\$\&\#\@\!\*\(\)]+$/)) return helper.message("xxx005190005 only allowed alphanumeric and . - _");
      return val;
    })
    .required()
    .label("xxx065035010 tableuserpasswordnew"),
})
  .required()
  .unknown()
  .label("xxx999999980 body");

// SIGNIN_SCHEMA
const signinSchema = Joi.object({
  ...defaultSchema,
  tableusername: Joi.string().min(5).max(20).required().label("xxx005190005 tableusername"),
  tableuserpassword: Joi.string().min(5).max(100).required().label("xxx005190005 fullname"),
  latitude: Joi.number().required().label("xxx005200005 latitude"),
  longitude: Joi.number().required().label("xxx005250005 longitude"),
})
  .required()
  .unknown()
  .label("xxx999999980 body");

// LOGOUT_SCHEMA
const logoutSchema = Joi.object({
  ...defaultSchema,
  userindex: Joi.string().min(5).max(16).required().label("xxx005190005 userindex"),
})
  .required()
  .unknown()
  .label("xxx999999980 body");

// FORGOT_SCHEMA
const forgotSchema = Joi.object({
  ...defaultSchema,
  tableusername: Joi.string().min(5).max(20).required().label("xxx005190005 tableusername"),
})
  .required()
  .unknown()
  .label("xxx999999980 body");

module.exports = {
  insertNewSchema,
  authDetailSchema,
  authStoreSchema,
  authNewPasswordSchema,
  signinSchema,
  logoutSchema,
  forgotSchema,
};
