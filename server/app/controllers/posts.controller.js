exports.addPost = (req, res) => {
  res.send({ message: "added post" });
};

exports.getUserPosts = (req, res) => {
  res.send({ message: "get posts" });
};
