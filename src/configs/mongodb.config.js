const mongoose = require("mongoose");
const mongodb_uri = process.env.MONGODB_URI || "";

const mongodb = mongoose.createConnection(mongodb_uri);

const mongodbConnection = async () => {
  try {
    await mongoose.connect(mongodb_uri);
    console.log(`mongodb connected...`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { mongodb, mongodbConnection };
