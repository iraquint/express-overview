// inside kittens-bad.js
const express = require("express"); // Import Express
const app = express();

app.get("/kittens/1", function(request, response, next) {
  response.send("kitten 1");
});

app.get("/kittens/2", function(request, response, next) {
  response.send("kitten 2");
});

app.get("/kittens/3", function(request, response, next) {
  response.send("kitten 3");
});

app.listen(3000, function() {
  console.log("Ready");
});

module.exports = app;
