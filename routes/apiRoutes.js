var db = require("../models");

module.exports = function (app) {
  // Get all users
  app.get("/api/user", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/user", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an user by id
  app.delete("/api/user/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  //get all posts
  app.get("/api/post", function (req, res) {
    db.Post.findAll({}).then(function (dbPosts) {
      res.render(dbPosts);
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

  // Create a new post
  app.post("/api/post", function (req, res) {
    console.log(req.body);
    db.Post.create(req.body)
    .then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // Delete an post by id
  app.delete("/api/post/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      console.log("post deleted");
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

  // Create a new comment
  app.post("/api/comment", function (req, res) {
    db.Comment.create(req.body).then(function (dbComment) {
      res.json(dbComment);
    }).catch((err) => {
      console.log(err)
    });
  });

  // Delete an comment by id
  app.delete("/api/comment/:id", function (req, res) {
    db.Comment.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbComment) {
      res.json(dbComment);
    });
  });
};