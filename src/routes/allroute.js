const responseHandler = require("../common/handler/response.handler");
const ErrorMessageObj = require("../common/objClass/ErrMessageObj.class");
const ResObjectResult = require("../common/objClass/ResObject.class");

const devToolRoutes = require("../module/devtool/devtool.route");
const actifityRoutes = require("../module/actifity/actifity.route");
const userRoutes = require("../module/user/user.route");
const authRoutes = require("../module/auth/auth.route");
const bannerRouter = require("../module/banner/banner.route");

const allRoutes = (fastify) => {
  fastify.get("/", (_, res) => res.status(200).send({ message: "ok" }));

  fastify.register(devToolRoutes, { prefix: "api/devtool" });
  fastify.register(authRoutes, { prefix: "api/auth" });
  fastify.register(userRoutes, { prefix: "api/user" });
  fastify.register(actifityRoutes, { prefix: "api/actifity" });
  fastify.register(bannerRouter, { prefix: "api/banner" });

  //handle error response
  fastify.setErrorHandler((error, _, res) => {
    const resObjResult = new ResObjectResult();
    const objErrorMessage = new ErrorMessageObj();

    objErrorMessage.code = "xxx999999999";
    objErrorMessage.errormassage = "server Error";
    objErrorMessage.codevariable = "";

    resObjResult.resultstatus = 0;
    resObjResult.resultmessage = [objErrorMessage];

    return responseHandler({ res, statusCode: 500, objResponse: resObjResult, error });
  });
};

module.exports = allRoutes;
