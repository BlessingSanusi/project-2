var bCrypt = require("bcrypt");

module.exports = function(passport, user){
    var User = user;
    var LocalStrategy = require("passport-local").Strategy;
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done){
        User.findByPk(id).then(function(user){
            if(user){
                done(null, user.get());
            } else{
                done(user.errors, null);
            }
        });
    });
    passport.use("local-signup", new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
            passReqToCallback: true
        },
        function(req, username, password, done){
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            User.findOne({
                where: {
                    username: username
                }
            }).then(function(user){
                if(user){
                    return done(null, false, {
                        message: "That username is already taken"
                    });
                } else{
                    var userPassword = generateHash(password);
                    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
                    var data = {
                        username: username,
                        password: userPassword,
                        joinDate: utc,
                    };
                    User.create(data).then(function(newUser){
                        if(!newUser){
                            console.log("signup failed");
                            return done(null, false);
                        }
                        if(newUser){
                            console.log("signup success");
                            return done(null, newUser);
                        }
                    });
                }
            })
        }
    ));
    passport.use("local-signin", new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
            passReqToCallback: true
        },
        function(req, username, password, done){
            var User = user;
            var isValidPassword = function(userpass, password){
                return bCrypt.compareSync(password, userpass);
            }
            User.findOne({
                where: {
                    username: username
                }
            }).then(function(user){
                if(!user){
                    return done(null, false, {
                        message: "User does not exist"
                    });
                }
                if(!isValidPassword(user.password, password)){
                    return done(null, false, {
                        message: "Incorrect password."
                    });
                }
                var userinfo = user.get();
                console.log("login success");
                return done(null, userinfo);
            }).catch(function(err){
                console.log("Error: ", err);
                return done(null, false, {
                    message: "Something went wrong with your signin"
                })
            })
        }
    ))
}