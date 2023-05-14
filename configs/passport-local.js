const passport = require("passport");
const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async function (email, password, done) {
      try {
        let user = await User.findOne({ email: email });
        if (!user || user.password != password) return done(null, false);
        return done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(async function (id, done) {
  try {
    let user = await User.findById(id);
    if (user) return done(null, user);
  } catch (err) {
    return done(err);
  }
});
passport.checkAuthentication = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/users/sign-in");
};

passport.setUserAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};
module.exports = passport;
