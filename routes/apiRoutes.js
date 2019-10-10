var db = require("../models");

<<<<<<< HEAD
module.exports = function(app) {
  // Get all users
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
=======
module.exports = function (app) {
  // Get all examples
  app.get("/api/user", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
>>>>>>> 582eea7d23f3e651484ed569cec551193fa11bee
      res.json(dbUsers);
    });
  });

<<<<<<< HEAD
  // Create a new user
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
=======
  // Create a new example
  app.post("/api/user", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
>>>>>>> 582eea7d23f3e651484ed569cec551193fa11bee
      res.json(dbUser);
    });
  });

<<<<<<< HEAD
  // Delete an user by id
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  //get all posts
  app.get("/api/post", function(req, res) {
    db.Post.findAll({}).then(function(dbPosts) {
=======
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
>>>>>>> 582eea7d23f3e651484ed569cec551193fa11bee
      res.json(dbPosts);
    });
  });

<<<<<<< HEAD
  // Create a new post
  app.post("/api/post", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Delete an post by id
  app.delete("/api/post/:id", function(req, res) {
    db.Post.destroy({ where: { id: req.params.id } }).then(function(dbPost) {
=======
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
>>>>>>> 582eea7d23f3e651484ed569cec551193fa11bee
      res.json(dbPost);
    });
  });

<<<<<<< HEAD
  // Create a new comment
  app.post("/api/comment", function(req, res) {
    db.Comment.create(req.body).then(function(dbComment) {
=======
  // Create a new example
  app.post("/api/comment", function (req, res) {
    db.Comment.create(req.body).then(function (dbComment) {
>>>>>>> 582eea7d23f3e651484ed569cec551193fa11bee
      res.json(dbComment);
    });
  });

<<<<<<< HEAD
  // Delete an comment by id
  app.delete("/api/comment/:id", function(req, res) {
    db.Comment.destroy({ where: { id: req.params.id } }).then(function(
=======
  // Delete an example by id
  app.delete("/api/comment/:id", function (req, res) {
    db.Comment.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (
>>>>>>> 582eea7d23f3e651484ed569cec551193fa11bee
      dbComment
    ) {
      res.json(dbComment);
    });
  });
};