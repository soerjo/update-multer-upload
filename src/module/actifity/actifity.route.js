const validateGtoken = require("../../common/validator/gtoken.validator");
const validatorHeaders = require("../../common/validator/headers.validator");
const validateLogin = require("../../common/validator/login.validator");
const validateSignature = require("../../common/validator/signature.validator");
const validateParams = require("../../common/validator/validateParams.validator");

const actifitySchema = require("./actifity.schema");
const actifityController = require("./actifity.controller");
const namespace = "actifitys ROUTES";

async function actifityRoutes(fastify) {
  // PRE-HANDLER AUTH ROUTES
  fastify.addHook("preHandler", async (req, res) => (res.actions = "/actifity/lists"));
  fastify.addHook("preHandler", validatorHeaders(actifitySchema.defaultSchema));
  fastify.addHook("preHandler", validateGtoken);
  fastify.addHook("preHandler", validateSignature);
  // fastify.addHook("preHandler", validateLogin);

  // PROFILE_ROUTE
  // fastify.get("/v01/lists", (req, res) => ({ message: "ok" }));
  fastify.get("/v01/lists", { preHandler: validateParams(actifitySchema.validateParams) }, actifityController.listsController);
  fastify.post("/v01/lists", { preHandler: validateParams(actifitySchema.validateParams) }, actifityController.listSearchController);
}

module.exports = actifityRoutes;
