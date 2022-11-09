const validateGtoken = require("../../common/validator/gtoken.validator");
const validateLogin = require("../../common/validator/login.validator");
const validator = require("../../common/validator/schema.validator");
const validateSignature = require("../../common/validator/signature.validator");

const userSchema = require("./user.schema");
const userController = require("./user.controller");
const multerController = require("../multer/multer.controller");
const validateUploadImage = require("../../common/validator/uploadFile.validator");
const { uploadItemSingle } = require("../multer/multer.service");
const validatorHeaders = require("../../common/validator/headers.validator");
// const validateHeaders = require("../../common/validator/validateHeader.validator");
const namespace = "USER ROUTES";

const customValidateStore = async (req) => {
  console.log(req.body);
  req.body.usernameinemail = req.body.tableusername + "@gmail.com";
};

async function userRouter(fastify) {
  // PRE-HANDLER AUTH ROUTES

  fastify.addHook("preHandler", uploadItemSingle);
  fastify.addHook("preHandler", validatorHeaders(userSchema.defaultSchema));
  fastify.addHook("preHandler", validateGtoken);
  fastify.addHook("preHandler", validateSignature);
  fastify.addHook("preHandler", validateLogin);

  // PROFILE_ROUTE
  fastify.post("/v01/profile", {}, userController.profileController);
  fastify.post("/v01/changeusername", { preHandler: [customValidateStore, validator(userSchema.changeUsernameSchema)] }, userController.changeUsernameController);
  fastify.post("/v01/changepassword", { preHandler: validator(userSchema.updatePasswordProfileSchema) }, userController.updatePasswordProfil);
  fastify.post("/v01/changecolor", { preHandler: validator(userSchema.changecolorSchema) }, userController.changeColorController);
  fastify.post("/v01/resetpin", { preHandler: validator(userSchema.resetPinProfileSchema) }, userController.resetPinProfile);

  fastify.post("/v01/requestotp", {}, userController.requestOtpController);
  fastify.post("/v01/validateotp", { preHandler: validator(userSchema.validateOtpSchema) }, userController.validateOtpController);
  fastify.post("/v01/insertchangephonenumber", {}, userController.insertchangephonenumber);
  fastify.post("/v01/changephonenumber", { preHandler: validator(userSchema.changePhoneNumberSchema) }, userController.changePhoneNumber);

  fastify.post("/v01/uploadphoto", { preHandler: validateUploadImage }, multerController.uploadPhoto);
}

module.exports = userRouter;
