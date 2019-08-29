var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
// Requiring Note and Article models
var Note = require("../models/Note.js");
var Article = require("../models/Article.js");

module.exports = function (app) {
    app.get("/scrape", function (req, res) {
        axios.get("https://nytimes.com/").then(function (response) {
            var $ = cheerio.load(response.data);
            $("article").each(function (i, element) {
                var result = {};
                result.title = $(this).children("h2").text();
			    result.summary = $(this).children(".summary").text();
			    result.link = $(this).children("h2").children("a").attr("href");

                db.Article.create(result)
                .then(function(dbArticle) {
                  // View the added result in the console
                  console.log(dbArticle);
                })
                .catch(function(err) {
                  // If an error occurred, log it
                  console.log(err);
                });
            });
        
            // Send a message to the client
            res.send("Scrape Complete");
          });
        
    })
}

    
