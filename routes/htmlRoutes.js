var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
module.exports = function (app) {

app.get("/", function (req, res) {
    res.render("index", {
    })
    })

}