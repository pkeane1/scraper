var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');

var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


mongoose.connect("mongodb://localhost/scraperdb", { useNewUrlParser: true });


// Handlebars
// app.engine(
//     "handlebars",
//     exphbs({
//       defaultLayout: "main"
//     })
//   );
//   app.set("view engine", "handlebars");
  
  // Routes


  // Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });