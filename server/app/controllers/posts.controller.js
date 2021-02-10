const db = require("../models");
const Post = db.post;

exports.addPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(500).send({ message: "Title and content require" });
    return;
  }

  const post = new Post({
    title: title,
    content: content,
    author: req.userId,
    date: new Date(),
  });
  post.save((err, post) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Post was added successfully!", post });
  });
};

exports.getUserPosts = (req, res) => {
  Post.find({
    author: req.userId,
  }).exec((err, posts) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send(posts);
  });
};
