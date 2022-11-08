require("dotenv").config();
const Joi = require("joi");

const defaultSchema = Joi.object({
  gtoken: Joi.string().required().label("xxx999999985 gtoken"),
  platform: Joi.string().default("WEBSITE"),
  signature: Joi.string().required().label("xxx999999980 signature"),
})
  .required()
  .unknown()

// INSERT_SCHEMA
const insertNewSchema = Joi.object({
  tableuserreferredby: Joi.string().required().label("xxx005235005 referredby"),
})
  .required()
  .label("xxx999999990 body");

// DETAIL_SCHEMA
const authDetailSchema = Joi.object({
  tokentrans: Joi.string().required().label("xxx999999965 tokentrans"),
})
  .required()
  .label("xxx999999990 body");

// STORE_SCHEMA
const authStoreSchema = Joi.object({
  tokentrans: Joi.string().required().label("xxx999999965 tokentrans"),
  usernameinemail: Joi.string().email().required().label("xxx005015015 usernameinemail"),
  tableusername: Joi.string()
    .min(5)
    .max(20)
    // .alphanum()
    .required()
    .label("xxx005015005 tableusername"),
  tableuserfullname: Joi.string()
    .min(5)
    .custom((val, helper) => {
      if (!val.match(/^[a-zA-Z\ ]+$/)) return helper.message("xxx005020015 fullname only allowed alphabet and white space");
      if (!val.substring(0, 1).match(/^[a-zA-Z]+$/)) return helper.message("xxx005020015 fullname start with non alphabet");
      if (!val.substring(val.length - 1, val.length).match(/^[a-zA-Z]+$/)) return helper.message("xxx005020015 fullname end with non alphabet");
      return val;
    })
    .max(100)
    .label("xxx005020005 fullname")
    .required(),
  userphonecountrycode: Joi.number().required().label("xxx005190005 phonecountrycode"),
  userphonenumbershort: Joi.number()
    .custom((val, helper) => {
      if (val.toString().length < 6 || val.toString().length > 15) return helper.message("xxx005190005 must beetwen 6 and 15 digits");
      return val;
    })
    .required()
    .label("xxx005190005 phonenumbershort"),
  tableuseremail: Joi.string().email().required().label("xxx005190005 email"),
})
  .required()
  .label("xxx999999990 body");

// NEWPASSWORD_SCHEMA
const authNewPasswordSchema = Joi.object({
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
  .label("xxx999999990 body");

// SIGNIN_SCHEMA
const signinSchema = Joi.object({
  tableusername: Joi.string().min(5).max(20).required().label("xxx005190005 username"),
  tableuserpassword: Joi.string().min(5).max(100).required().label("xxx005190005 password"),
  latitude: Joi.number().required().label("xxx005200005 latitude"),
  longitude: Joi.number().required().label("xxx005250005 longitude"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

// LOGOUT_SCHEMA
const logoutSchema = Joi.object({
  userindex: Joi.string().min(5).max(16).required().label("xxx005190005 userindex"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

// FORGOT_SCHEMA
const forgotSchema = Joi.object({
  tableusername: Joi.string().min(5).max(20).required().label("xxx005190005 tableusername"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

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
