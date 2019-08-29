var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
module.exports = function (app) {

app.get("/", function (req, res) {
    db.Article.find().sort({ _id: -1 }).then(function (result) {
    res.render("index", {
        Articles: result
    })
    })

})
}