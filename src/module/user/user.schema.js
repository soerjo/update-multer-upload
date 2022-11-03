require("dotenv").config();
const Joi = require("joi");

const defaultSchema = {
  platform: Joi.string().default("WEBSITE"),
  gtoken: Joi.string().required().label("xxx999999980 gtoken headers"),
  signature: Joi.string().required().label("xxx999999955 signature headers"),
};

// VALIDATE_HEADERS
const headersSchema = Joi.object({
  ...defaultSchema,
  tokenlogin: Joi.string().required().label("xxx005190005 tokenlogin headers"),
})
  .required()
  .unknown()
  .label("xxx999999980 body");

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
      if (!val.match(/^[0-9a-zA-Z\.\-\_]+$/)) return helper.message("xxx005190005 not alphanumeric");
      if (!val.substring(0, 1).match(/^[a-zA-Z]+$/)) return helper.message("xxx005190005 start with non alphabet");
      return val;
    })
    .required()
    .label("xxx005190005 tableusername"),
  tableuserfullname: Joi.string().min(5).max(100).label("xxx005190005 fullname").required(),
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
    .regex(/^[a-zA-Z0-9]/)
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

// FORGOT_SCHEMA
const profileSchema = Joi.object({
  ...defaultSchema,
  userindex: Joi.string().min(5).max(16).required().label("xxx005190005 userindex"),
  tokenlogin: Joi.string().required().label("xxx005190005 tokenlogin"),
})
  .required()
  .unknown()
  .label("xxx999999980 body");

// UPDATE_PROFILE
const updateProfileSchema = Joi.object({
  ...defaultSchema,
  userindex: Joi.string().min(5).max(16).required().label("xxx005190005 userindex"),
  tableusername: Joi.string().min(5).max(16).required().label("xxx005190005 tableusername"),
  tokenlogin: Joi.string().required().label("xxx005190005 tokenlogin"),
})
  .required()
  .unknown()
  .label("xxx999999980 body");

const updatePasswordProfileSchema = Joi.object({
  ...defaultSchema,
  userpasswordold: Joi.string().min(5).max(16).required().label("xxx005190005 userpasswordold"),
  userpasswordnew: Joi.string().min(5).max(16).required().label("xxx005190005 userpasswordnew"),
  userindex: Joi.string().min(5).max(16).required().label("xxx005190005 userindex"),
  tokenlogin: Joi.string().required().label("xxx005190005 tokenlogin"),
})
  .required()
  .unknown()
  .label("xxx999999980 body");

const resetPinProfileSchema = Joi.object({
  ...defaultSchema,
  userpinnew: Joi.string().min(5).max(16).required().label("xxx005190005 userpasswordold"),
  userpassword: Joi.string().min(5).max(16).required().label("xxx005190005 userpasswordnew"),
  userindex: Joi.string().min(5).max(16).required().label("xxx005190005 userindex"),
  tokenlogin: Joi.string().required().label("xxx005190005 tokenlogin"),
})
  .required()
  .unknown()
  .label("xxx999999980 body");

module.exports = {
  headersSchema,
  insertNewSchema,
  authDetailSchema,
  authStoreSchema,
  authNewPasswordSchema,
  signinSchema,
  logoutSchema,
  forgotSchema,
  profileSchema,
  updateProfileSchema,
  updatePasswordProfileSchema,
  resetPinProfileSchema,
};
