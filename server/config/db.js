const mongoose = require("mongoose");

const mongo_uri = process.env.MONGO_URI;

exports.dbConnect = async () => {
  try {
    await mongoose.connect(mongo_uri);

    console.log("Database Connection Successfull");
  } catch (err) {
    console.log("Database Connection Failed!",err.message);
  }
};
