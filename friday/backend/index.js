const express = require("express");
const app = express();
const mongoDB = require("./db");
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello f world");
});

app.listen(5000);
