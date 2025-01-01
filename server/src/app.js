const express = require("express");
const app = express();

app.use("/test", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.use("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.listen(3000, () => {
  console.log("Server has started");
});
