const express = require("express");
const app = express();
require("dotenv").config();
const { adminAuth, userAuth } = require("./middlewares/auth");
const { connectDb } = require("./config/database");

connectDb()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

app.listen(3000, async () => {
  console.log("Server has started");
});
