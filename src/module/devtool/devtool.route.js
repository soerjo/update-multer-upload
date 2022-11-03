const devtoolController = require("./devtool.controller");

async function devToolRoutes(fastify) {
  fastify.get("/", () => ({ message: `${namespace} ok!` }));
  fastify.get("/v01/listemailverification", devtoolController.getEmailVerificationLists);
  fastify.post("/v01/signaturegenerate", devtoolController.signaturegenerateV01);
  fastify.post("/v01/signatureverification", devtoolController.signatureverificationV01);
}

module.exports = devToolRoutes;
