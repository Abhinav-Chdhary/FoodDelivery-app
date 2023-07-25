const express = require("express");
const app = express();
const mongoDB = require("./db");
mongoDB()
  .then(() => {
    console.log("Database operation completed successfully.");
    // Additional code here, if needed
  })
  .catch((error) => {
    console.error("An error occurred during database operation:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(5000);
