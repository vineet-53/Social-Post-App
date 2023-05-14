const User = require("../models/user");
module.exports.signUp = (req, res) => {
  if (res.locals.user) return res.redirect("back");
  return res.render("users/signUp");
};
module.exports.signIn = (req, res) => {
  if (res.locals.user) return res.redirect("back");
  return res.render("users/signIn");
};
module.exports.create = async (req, res) => {
  const { email } = req.body;
  let user = await User.findOne({ email: email });
  if (user) return res.redirect("/users/sign-in");
  user = await User.create(req.body);
  return res.redirect("/users/sign-in");
};
module.exports.createSession = (req, res) => {
  return res.redirect("/posts/show");
};
module.exports.signOut = (req, res) => {
  req.logout(function (err) {
    if (err) return next(err);
    return res.redirect("/users/sign-in");
  });
};
module.exports.profile = (req, res) => {
  return res.render("users/profile" , {user : req.user});
};
