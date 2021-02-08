const db = require("../models");
const User = db.user;
const Post = db.post;


exports.addPost = (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.userId,
    date: new Date()
  });
  post.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Post was added successfully!" });
  })
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
}
