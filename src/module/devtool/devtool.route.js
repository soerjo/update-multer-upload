const validatorHeaders = require("../../common/validator/headers.validator");
const devtoolController = require("./devtool.controller");
const devtoolSchema = require("./devtool.schema");

async function devToolRoutes(fastify) {
  fastify.addHook("preHandler", validatorHeaders(devtoolSchema.defaultSchema));

  fastify.get("/v01/listemailverification", devtoolController.getEmailVerificationLists);
  fastify.post("/v01/signaturegenerate", devtoolController.signaturegenerateV01);
  fastify.post("/v01/signatureverification", devtoolController.signatureverificationV01);
}

module.exports = devToolRoutes;
