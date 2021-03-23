const db = require("../models");
const Post = db.post;

exports.addPost = (req, res) => {
  const { title, description, content } = req.body;

  if (!title || !content || !description) {
    res
      .status(500)
      .send({ message: "Title and description and content require" });
    return;
  }

  const post = new Post({
    title: title,
    description: description,
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
  })
    .populate("author")
    .sort({ date: "desc" })
    .exec((err, posts) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send(posts);
    });
};

exports.getPostById = (req, res) => {
  Post.findOne({
    id: req.id,
  })
    .populate("author")
    .exec((err, post) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send(post);
    });
};

exports.getPosts = (req, res) => {
  Post.find()
    .populate("author")
    .sort({ date: "desc" })
    .exec((err, posts) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send(posts);
    });
};

exports.addPermissinOnPost = (req, res) => {
  Post.findOne({
    author: req.userId,
    id: req.id,
  }).exec((err, post) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send(post);
  });
};
