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
  root: join(__dirname, `/.${process.env.UPLOAD_FILE_DIR}`),
  prefix: process.env.UPLOADED_PREFIX || "/public/",
});
fastify.register(contentParser);
fastify.addHook("preHandler", logsrequest);

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
  !existsSync(process.env.UPLOAD_FILE_DIR) && mkdirSync(process.env.UPLOAD_FILE_DIR, { recursive: true });
};

checkingDirectory();
startServer();
