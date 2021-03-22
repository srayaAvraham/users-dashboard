const mongoose = require("mongoose");
const { Schema } = mongoose;
const Post = mongoose.model(
  "Post",
  new Schema({
    title: String,
    description: String,
    content: String,
    date: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    permissions: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        role: String,
      },
    ],
  }).post("save", function (doc, next) {
    console.log("%p has been saved", doc._id);
    doc.populate("author").execPopulate(function () {
      next();
    });
  })
);

module.exports = Post;
