/*-----------------------\
 PATHS FOR DIFF HTML PAGES
\-----------------------*/
const path = require("path");
var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("../views/index.handlebars");
  });

  // Load Page that shows Category 1
  app.get("/category1", function (req, res) {
    res.render("../views/category1.handlebars");
  });

  // Load Page that shows Category 2
  app.get("/category2", function (req, res) {
    res.render("../views/category2.handlebars");
  });

  // Load Page that shows Category 3
  app.get("/category3", function (req, res) {
    res.render("../views/category3.handlebars");
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