const errorServerHandler = require("../common/handler/errorServer.handler");

const devToolRoutes = require("../module/devtool/devtool.route");
const userRoutes = require("../module/user/user.route");
const authRoutes = require("../module/auth/auth.route");

const allRoutes = (fastify) => {
  fastify.register(devToolRoutes, { prefix: "api/devtool" });
  fastify.register(authRoutes, { prefix: "api/auth" });
  fastify.register(userRoutes, { prefix: "api/user" });

  //handle error response
  fastify.setErrorHandler(errorServerHandler);
};

module.exports = allRoutes;
