const mongoose = require("mongoose");
const { Schema } = mongoose;
const Post = mongoose.model(
  "Post",
  new Schema({
    title: String,
    content: String,
    date: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  })
);

module.exports = Post;
