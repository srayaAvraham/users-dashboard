const verifyToken = require("../middleware/auth");
const { addPost, getUserPosts } = require("../controllers/posts.controller");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/", verifyToken, addPost);

router.get("/", verifyToken, getUserPosts);

module.exports = router;
