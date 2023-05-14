const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  content: {
    type: String,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});
module.exports = Comment = mongoose.model("Comment", commentSchema);
