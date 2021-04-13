const verifyToken = require("../middleware/auth");
const {
  addPost,
  // getUserPosts,
  // updatePost,
  getPostById,
  getPosts,
  addPermissinOnPost,
} = require("../controllers/posts.controller");
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
// router.put("/", verifyToken, updatePost);
router.put("/permissin", addPermissinOnPost);
router.get("/", verifyToken, getPosts);
router.get("/:id", verifyToken, getPostById);

module.exports = router;
