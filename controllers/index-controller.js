module.exports.home = (req, res) => {
  if (res.locals.user) return res.redirect("/posts/show");
  return res.redirect("/users/sign-up");
};
