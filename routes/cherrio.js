var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var request = require('request');
// Requiring Note and Article models
var Note = require("../models/Note.js");
var Article = require("../models/Article.js");

