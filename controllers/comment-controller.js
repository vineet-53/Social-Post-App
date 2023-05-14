const Comment = require("../models/comment");
const Post = require("../models/post");
module.exports.create = async (req, res) => {
  let post = await Post.findById(req.params.postId);
  await Comment.create({
    content: req.body.content,
    user: req.user.id,
    post: post,
  }).then((comment) => {
    post.comment.push(comment);
    post.save();
  });
  return res.redirect("/posts/show");
};
module.exports.delete = async (req, res) => {
  const foundComment = await Comment.findById(req.params.commentId);
  await Comment.deleteOne(foundComment);
 return  res.redirect("/posts/show");
};
