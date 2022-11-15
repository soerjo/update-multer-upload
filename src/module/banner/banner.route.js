const validateGtoken = require("../../common/validator/gtoken.validator");
const validateLogin = require("../../common/validator/login.validator");
const validator = require("../../common/validator/schema.validator");
const validateSignature = require("../../common/validator/signature.validator");
const validatorHeaders = require("../../common/validator/headers.validator");
const validateUploadImage = require("../../common/validator/uploadFile.validator");

const bannerSchema = require("./banner.schema");
const bannerController = require("./banner.controller");
const { uploadMulter } = require("../multer/multer.service");
const validateParams = require("../../common/validator/validateParams.validator");

const namespace = "USER ROUTES";

const uploadPreHandler = uploadMulter.fields([
  { name: "banner_desktop", maxCount: 1 },
  { name: "banner_mobile", maxCount: 1 },
]);

async function bannerRouter(fastify) {
  // PRE-HANDLER AUTH ROUTES
  //   fastify.addHook("preHandler", uploadMulter.any());
  //   fastify.addHook("preHandler", validatorHeaders(bannerSchema.defaultSchema));
  //   fastify.addHook("preHandler", validateGtoken);
  //   fastify.addHook("preHandler", validateSignature);
  //   fastify.addHook("preHandler", validateLogin);

  // PROFILE_ROUTE
  fastify.post("/v01/upload", { preHandler: [uploadPreHandler, validator(bannerSchema.uploadSchema)] }, bannerController.uploadBanner);
  fastify.get("/v01/list", {}, bannerController.listBanner);
  fastify.post("/v01/change", { preHandler: [uploadPreHandler, validator(bannerSchema.changeSchema)] }, bannerController.changeBanner);
  fastify.get("/v01/inactive", { preHandler: [validateParams(bannerSchema.inactiveSchema)] }, bannerController.inactiveBanner);
}

module.exports = bannerRouter;
