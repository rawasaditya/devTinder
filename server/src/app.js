const express = require("express");
const app = express();
require("dotenv").config();
const { adminAuth, userAuth } = require("./middlewares/auth");
const { connectDb } = require("./config/database");

connectDb()
  .then(() => {
    console.log("Database connected");
    app.listen(process.env.PORT, async () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });
