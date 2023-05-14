const mongoose = require("mongoose");
const User = require("./user");
const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    content: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comment : [{
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Comment'
    }]
  },
  { timestamps: true }
);
module.exports = Post = mongoose.model("Post", postSchema);
