/*-----------------------\
 PATHS FOR DIFF HTML PAGES
\-----------------------*/
const path = require("path");
var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    //dB query response
    //Response formatting {}
    //var formattingObj = {key1: database.whatever, key2: db.otherstuff}
    // res.render("../views/index.handlebars", formattingObj);
    res.render("../views/index.handlebars");
  });

  app.get("/about", function (req, res) {
    res.render("../views/about.handlebars");
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};