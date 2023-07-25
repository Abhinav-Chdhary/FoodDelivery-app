const mongoose = require("mongoose");
const mongouri =
  "mongodb+srv://Fridayfood:saymyname@cluster0.4qqraem.mongodb.net/fridayfood?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongouri);
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find().toArray(function (err, data) {
      if (err) {
        console.error("Error retrieving data:", err);
      } else {
        console.log(data);
      }
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = mongoDB;
