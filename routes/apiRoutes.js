var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/user", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new example
  app.post("/api/user", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an example by id
  app.delete("/api/user/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  app.get("/api/post", function (req, res) {
    db.Post.findAll({}).then(function (dbPosts) {
      res.json(dbPosts);
    });
  });

  app.post("/api/create", function (req, res) {
    console.log(req.body);
    db.Post.create({
        title: req.body.title,
        body: req.body.body,
        CategoryId: req.body.CategoryId,
        UserId: req.body.UserId
      })
      .then(function () {
        res.send(200);
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  });

  // Delete an example by id
  app.delete("/api/post/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // Create a new example
  app.post("/api/comment", function (req, res) {
    db.Comment.create(req.body).then(function (dbComment) {
      console.log(dbComment)
      res.json(dbComment);
    }).catch((err) => {
      console.log(err)
    });
  });

  // Delete an example by id
  app.delete("/api/comment/:id", function (req, res) {
    db.Comment.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (
      dbComment
    ) {
      res.json(dbComment);
    });
  });
};