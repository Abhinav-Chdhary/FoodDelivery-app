const mongoose = require("mongoose");
const mongouri =
  "mongodb+srv://Fridayfood:saymyname@cluster0.4qqraem.mongodb.net/fridayfood?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongouri);
    console.log("Connected to MongoDB");
    const fetched_data = await mongoose.connection.db.collection("food_items");
    const finalFetchedData = await fetched_data.find().toArray();
    console.log(finalFetchedData);
    /* await fetched_data.find().toArray(function (err, data) {
      if (err) {
        console.error("Error retrieving data:", err);
      } else {
        console.log(data);
      }
    }); */
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = mongoDB;
