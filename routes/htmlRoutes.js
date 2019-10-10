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

  app.get("/post", function (req, res) {
    res.render("../views/post.handlebars");
  });

  // app.get("/post/:id", function (req, res) {
  //   db.Comment.findAll({
  //     where: {
  //       PostId: req.params.id
  //     }
  //   }).then(function (
  //     results
  //   ) {
  //     console.log(results);
  //     res.render("comment", {
  //       comment: results
  //     });
  //   });
  // });

  app.get("/Post/:id", function (req, res) {
    db.Post.findAll({
      where: {
        PostId: req.params.id
      },
      include: [db.Comments]
    }).then(function (results) {
      console.log(results);
      var hbsObject = {
        Post: results
      };

      // for loop to keep track of what Post we're looking at
      for (i = 0; i < results.length; i++) {
        if (req.user && req.user.id === results[i].UserId) {
          results[i].displayDelete = true;
        }
        // for loop to go through the Comments of that Post
        for (j = 0; j < results[i].Comments.length; j++) {
          // check to see if req.user.id === results[i].Comments[j].UserId
          // if it is, make a new property in that Comments object, displayDelete = true
          if (req.user && req.user.id === results[i].Comments[j].UserId) {
            results[i].Comments[j].displayDelete = true;
          }
        }
      }

      res.render("post", hbsObject);
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};