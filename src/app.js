const express = require("express");
const app = express();

const kittens = require("./kittens-good.js"); // directory path to your router file here

app.use("/kittens", kittens);

app.listen(3000, function() {
  console.log("Ready");
});

module.exports = app;
