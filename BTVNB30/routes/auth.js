var express = require("express");
var router = express.Router();
const passport = require("passport");

const isLogin = (req, res, next) => {
  console.log(req.user);
  if (req.user) {
    res.redirect("/");
  }
  next();
};

const AuthController = require("../controllers/AuthController");
/* GET home page. */
router.get("/login", isLogin, AuthController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
  }),

  AuthController.handleLogin
);

router.get("/register", isLogin, AuthController.register);
router.post("/register", AuthController.handleRegister);

router.get("/logout", AuthController.logout);

router.get("/forgot", AuthController.forgot);
router.post("/forgot", AuthController.handleForgot);

router.get("/reset/:token", AuthController.reset);
router.post("/reset/:token", AuthController.handleReset);

module.exports = router;
