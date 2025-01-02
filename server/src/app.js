const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth, (req, res) => {
  res.json({ message: "Admin access granted" });
});

app.get("/user", userAuth, (req, res) => {
  res.json({ message: "User access granted" });
});
app.listen(3000, () => {
  console.log("Server has started");
});
