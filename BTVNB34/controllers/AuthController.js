const model = require("../models/index");
const User = model.User;
module.exports = {
  login: (req, res) => {
    res.render("auth/login", { layout: "layouts/auth_layout" });
  },
  handleLogin: async (req, res) => {
    res.redirect("/");
  },
  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
  },
};
