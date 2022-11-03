const validateGtoken = require("../../common/validator/gtoken.validator");
const validateLogin = require("../../common/validator/login.validator");
const validator = require("../../common/validator/schema.validator");
const validateSignature = require("../../common/validator/signature.validator");

const userSchema = require("./user.schema");
const userController = require("./user.controller");
const multerController = require("../multer/multer.controller");
const validateUploadImage = require("../../common/validator/uploadFile.validator");
const { uploadItemSingle } = require("../multer/multer.service");
// const validateHeaders = require("../../common/validator/validateHeader.validator");
const namespace = "USER ROUTES";

async function userRouter(fastify) {
  // PRE-HANDLER AUTH ROUTES

  // fastify.addHook("preHandler", validateHeaders(userSchema.headersSchema));
  fastify.addHook("preHandler", uploadItemSingle);
  fastify.addHook("preHandler", validateGtoken);
  fastify.addHook("preHandler", validateSignature);
  fastify.addHook("preHandler", validateLogin);

  // PROFILE_ROUTE
  fastify.post("/v01/profile", { preHandler: validator(userSchema.profileSchema) }, userController.profileController);
  fastify.post("/v01/changeusername", { preHandler: validator(userSchema.updateProfileSchema) }, userController.updateUsernameController);
  fastify.post("/v01/changepassword", { preHandler: validator(userSchema.updatePasswordProfileSchema) }, userController.updatePasswordProfil);
  fastify.post("/v01/resetpin", { preHandler: validator(userSchema.resetPinProfileSchema) }, userController.resetPinProfile);
  fastify.post("/v01/uploadphoto", { preHandler: validateUploadImage }, multerController.uploadPhoto);
}

module.exports = userRouter;
