var db = require("../models");
var authController = require("../controllers/authController.js");
module.exports = function(app, passport){
    app.get("/signup", authController.signup);
    app.get("/signin", authController.signin);
    app.get("/dashboard", isLoggedIn, authController.dashboard);
    app.get("/logout", authController.logout);
    app.post("/api/signup", passport.authenticate("local-signup", {
        successRedirect: "/dashboard",
        failureRedirect: "/signup"
      }));
    app.post("/api/signin", passport.authenticate("local-signin", {
        successRedirect: "/dashboard",
        failureRedirect: "/signin"
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