const checkDuplicateUsernameOrEmail = require("../middleware/verifySignUp");
const { signup, signin } = require("../controllers/auth.controller");
const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();

  router.post("/signup", checkDuplicateUsernameOrEmail, signup);

  router.post("/signin", signin);
});

module.exports = router;
