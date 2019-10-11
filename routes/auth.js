var db = require("../models");
var authController = require("../controllers/authController.js");
module.exports = function(app, passport){
    app.get("/api/signup", authController.signup);
    app.get("/api/signin", authController.signin);
    app.get("/api/logout", authController.logout);
    app.post("/api/signup", passport.authenticate("local-signup", {
        successRedirect: "/",
        failureRedirect: "/"
      }, function(req, res){
          console.log("Auth.js signup called");
          // db.User.create(req.body).then(function(dbU){
          //     res.json(dbU);
          // });
      }));
    app.post("/api/signin", passport.authenticate("local-signin", {
        successRedirect: "/",
        failureRedirect: "/"
    }));
      app.post("/api/login", function(req, res){
        var userCheck = req.params;
        console.log(userCheck);
      });
      function isLoggedIn(req, res, next){
          if(req.isAuthenticated()) return next();
          res.redirect("/");
      }
}