const validateGtoken = require("../../common/validator/gtoken.validator");
const validator = require("../../common/validator/schema.validator");
const validateSignature = require("../../common/validator/signature.validator");
const validateLogin = require("../../common/validator/login.validator");

const authSchema = require("./auth.schema");
const authController = require("./auth.controller");
const validatorHeaders = require("../../common/validator/headers.validator");
const namespace = "AUTH ROUTES";

async function authRoutes(fastify) {
  fastify.addHook("preHandler", validatorHeaders(authSchema.defaultSchema));
  fastify.addHook("preHandler", validateGtoken);
  fastify.addHook("preHandler", validateSignature);

  fastify.route({ method: "POST", url: "/v01/islogin", preHandler: validateLogin, handler: authController.isLogin });

  // REGISTER_ROUTE
  fastify.route({ method: "POST", url: "/v01/insertnew", preHandler: validator(authSchema.insertNewSchema), handler: authController.authInsertNew });
  fastify.route({ method: "POST", url: "/v01/detailid", preHandler: validator(authSchema.authDetailSchema), handler: authController.authDetailId });
  fastify.route({ method: "POST", url: "/v01/store", preHandler: validator(authSchema.authStoreSchema), handler: authController.authStore });
  fastify.route({ method: "POST", url: "/v01/newpassword", preHandler: validator(authSchema.authNewPasswordSchema), handler: authController.authNewPassword });

  // LOGIN_ROUTE
  fastify.route({ method: "POST", url: "/v01/signin", preHandler: validator(authSchema.signinSchema), handler: authController.authSigninController });
  fastify.route({ method: "POST", url: "/v01/logout", preHandler: validator(authSchema.logoutSchema), handler: authController.authLogoutController });
  fastify.route({ method: "POST", url: "/v01/forgotnamepassword", preHandler: validator(authSchema.forgotSchema), handler: authController.forgotController });
}

module.exports = authRoutes;
