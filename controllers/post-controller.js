const Post = require("../models/post");
module.exports.show = async (req, res) => {
  if (!res.locals.user) return res.redirect("/users/sign-in");
  let post = await Post.find({}).populate("user").populate('comment');
  return res.render("posts", { posts: post  });
};

module.exports.create = async (req, res) => {
  await Post.create({
    content: req.body.content,
    user: req.user.id,
  });
  return res.redirect("/posts/show");
};
module.exports.delete = async (req, res) => {
  const post = await Post.findById(req.params.postId);
  await Post.deleteOne(post);
  return res.redirect("back");
};
