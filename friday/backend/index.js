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

app.use(express.json());
/*express.json() is a built-in
middleware function in Express.*/

app.use("/api", require("./Routes/CreateUser"));
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(5000);
