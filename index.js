const express = require("express");
const hbs = require("hbs");

// -------------
hbs.registerPartials(__dirname + "/views/partials");
const app = express();

// -------------

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// -------------

app.get("/about", function (request, response) {
  response.render("about");
});

app.get("/works", function (request, response) {
  response.render("works");
});

app.get("*", function (request, response) {
  response.render("home");
});

app.listen(3000);
