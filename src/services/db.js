const mongoose = require("mongoose");

const connectDatabase = async () => {
  console.log("connecting to database");
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connecting database!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDatabase;
