const verifyToken = require("../middleware/auth");
const controller = require("../controllers/posts.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/post", verifyToken, controller.addPost);

  app.get("/api/post", verifyToken, controller.getUserPosts);
};
