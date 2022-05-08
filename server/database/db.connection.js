const mongoose = require("mongoose");

const connectToMongo = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("project places is connected to MongoDB");
  } catch {
    throw new Error("Couldn't connect to Mongo'");
  }
};

module.exports = connectToMongo;
