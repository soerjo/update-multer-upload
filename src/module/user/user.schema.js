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
  .unknown();

// INSERT_SCHEMA
const insertNewSchema = Joi.object({
  tableuserreferredby: Joi.string().required().label("xxx005190005 referredby"),
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
  tableusername: Joi.string()
    .min(5)
    .max(20)
    .custom((val, helper) => {
      if (!val.match(/^[0-9a-zA-Z\.\-\_]+$/)) return helper.message("xxx005190005 not alphanumeric");
      if (!val.substring(0, 1).match(/^[a-zA-Z]+$/)) return helper.message("xxx005190005 start with non alphabet");
      return val;
    })
    .required()
    .label("xxx005190005 tableusername"),
  tableuserfullname: Joi.string().min(5).max(100).alphanum().label("xxx005190005 fullname").required(),
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
    .regex(/^[a-zA-Z0-9]/)
    .required()
    .label("xxx065035010 tableuserpasswordnew"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

// SIGNIN_SCHEMA
const signinSchema = Joi.object({
  tableusername: Joi.string().min(5).max(20).required().label("xxx005190005 tableusername"),
  tableuserpassword: Joi.string().min(5).max(100).required().label("xxx005190005 fullname"),
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

// FORGOT_SCHEMA
const profileSchema = Joi.object({}).unknown().label("xxx999999990 body");

// UPDATE_PROFILE
const changeUsernameSchema = Joi.object({
  tableusername: Joi.string().min(5).max(16).required().label("xxx005190005 tableusername"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const updatePasswordProfileSchema = Joi.object({
  userpasswordold: Joi.string().min(5).max(16).required().label("xxx005190005 userpasswordold"),
  userpasswordnew: Joi.string().min(5).max(16).required().label("xxx005190005 userpasswordnew"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const changecolorSchema = Joi.object({
  color: Joi.string().min(5).max(7).required().label("xxx005190005 color"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const resetPinProfileSchema = Joi.object({
  userpinnew: Joi.string().min(5).max(16).required().label("xxx005190005 userpasswordold"),
  userpassword: Joi.string().min(5).max(16).required().label("xxx005190005 userpasswordnew"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const trigerOtpSchema = Joi.object({}).required().unknown().label("xxx999999990 body");

const validateOtpSchema = Joi.object({
  otp: Joi.string().min(5).max(16).required().label("xxx005190005 otp"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const changePhoneNumberSchema = Joi.object({
  userphonecountrycode: Joi.number().required().label("xxx005190005 phonecountrycode"),
  userphonenumbershort: Joi.number()
    .custom((val, helper) => {
      console.log(val.toString());
      if (val.toString().length < 7 || val.toString().length > 15) return helper.message("xxx005190005 must beetwen 7 and 15 digits");
      return val;
    })
    .required()
    .label("xxx005190005 phonenumbershort"),
})
  .required()
  .unknown()
  .label("xxx999999990 body");

const insertPhoneNumberSchema = Joi.object({}).required().unknown().label("xxx999999990 body");

module.exports = {
  defaultSchema,
  insertNewSchema,
  authDetailSchema,
  authStoreSchema,
  authNewPasswordSchema,
  signinSchema,
  logoutSchema,
  forgotSchema,
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
