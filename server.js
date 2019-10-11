require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;
// Middleware
var passport = require("passport");
var session = require('express-session');
var bodyParser = require('body-parser');

// For Passport
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(session({ secret: 'recipedb',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
// var env = require("dotenv");
// env.load(); getting an error about env.load();
// Handlebars
app.set("views", "./views");
app.engine(
  "handlebars",
  exphbs({
    // defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/auth")(app, passport);
require("./config/passport/passport.js")(passport, db.User);

var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
}).catch(function(err){
  console.log(err, "Something went wrong with the database update!");
});

module.exports = app;