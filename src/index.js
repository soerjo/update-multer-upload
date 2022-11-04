require("dotenv").config();
const { join } = require("path");
const { existsSync, mkdirSync } = require("fs");
const { contentParser } = require("fastify-multer");
const { dbConnection } = require("./configs/mysql.config");
const { mongodbConnection } = require("./configs/mongodb.config");
const allRoutes = require("./routes/allroute");
const logsrequest = require("./common/handler/logsrequest.handler");

const port = process.env.PORT || 5000;
const fastify = require("fastify")();
fastify.register(require("@fastify/cors"), "*");
fastify.register(require("@fastify/static"), {
  root: join(__dirname, "/../FILE_DOCS/PHOTO"),
  prefix: process.env.UPLOADED_PREFIX || "/public/",
});
fastify.addHook("preHandler", logsrequest);
fastify.register(contentParser);

fastify.get("/", (req, res) => res.status(200).send({ message: "ok" }));
allRoutes(fastify);

const startServer = async () => {
  try {
    await mongodbConnection();
    await dbConnection();
    await fastify.listen({ port });
    console.log(`server is running at port: ${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const checkingDirectory = () => {
  !existsSync(`./FILE_DOCS/PHOTOPROFILE`) && mkdirSync(`./FILE_DOCS/PHOTOPROFILE`, { recursive: true });
};

checkingDirectory();
startServer();
