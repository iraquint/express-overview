const express = require("express");
const app = express();

app.get("/home", function(request, response, next) {
  if (request.ip === "Some IP address to block") {
    response.send(404);
  } else {
    next();
  }
});

// Second handler for /home
app.get("/home", function(request, response, next) {
  response.send(200);
});

app.listen(3000, function() {
  console.log("Ready");
});

module.exports = app;
