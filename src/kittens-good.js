// inside kittens-good.js
const express = require("express"); // Import Express
const app = express();
const kittens = express.Router(); // Create a Router object named kittens

// Our route to handle requests to /kitten
kittens.get("/", function(request, response, next) {
  let myKittenData = {};
  let kittenColor = request.query.color; // gets a the 'color' query string if it exists
  /* Mock database/server logic to retrieve all of our kitten data here */
  myKittenData = { kitty: "kitty", cat: "cat" };

  if (kittenColor) {
    // If we have a filter...
    response.send(
      `Hi there ${kittenColor} ${myKittenData.kitty} ${myKittenData.cat}!`
    );
  } else {
    response.send(`Hi there ${myKittenData.kitty} ${myKittenData.cat}!`);
  }
});

// Our route to handle routes to an individual kitten's page
kittens.get("/:id", function(request, response, next) {
  let kittenID = request.params.id; // get ID of kitten from the request URL

  /* Mock using kitten ID to do database/server logic to retrieve individual kitten data here */
  const myKittenData = ["Moe", "Curly", "Larry", "Todd"];

  response.send(myKittenData[kittenID]);
});

module.exports = kittens; // Make sure that Kittens is available to our other files, so we can use it in our app.js
