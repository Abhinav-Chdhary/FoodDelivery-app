const mongoose = require("mongoose");
const mongouri =
  "mongodb+srv://Fridayfood:saymyname@cluster0.4qqraem.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongouri);
  console.log("Connected");
  //.catch((error) => console.error("MongoDB connection error:", error));
};

module.exports = mongoDB;
