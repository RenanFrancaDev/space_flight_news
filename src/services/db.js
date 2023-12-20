const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async (req = null, res = null, next = null) => {
  console.log("connecting to database");
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connecting database!");
    try {
      next();
    } catch {}
    return mongoose;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDatabase;
