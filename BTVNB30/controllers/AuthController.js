const bcrypt = require("bcrypt");
const model = require("../models/index");
const passport = require("passport");
const User = model.User;
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "jsonwebtoken-secret";

module.exports = {
  login: async (req, res) => {
    const msg = req.flash("error");
    const success = req.flash("success");
    const msgType = msg ? "danger" : "success";
    res.render("auth/login", {
      pageTitle: "Đăng nhập",
      msg,
      success,
      msgType,
    });
  },

  handleLogin: async (req, res) => {
    res.redirect("/");
  },

  register: async (req, res) => {
    res.render("auth/register", { pageTitle: "Đăng ký" });
  },

  handleRegister: async (req, res) => {
    const { name, email, password } = req.body;
    const salt = 10;

    bcrypt.hash(password, salt, async function (err, hash) {
      // Store hash in your password DB.
      console.log(hash);
      const data = await User.create({
        name,
        email,
        password: hash,
      });
      // insert name, email, password(hash) vào DB => Hoàn thiện phần đăng ký

      if (data) {
        req.flash("msg", "Đăng ký tài khoản thành công");
        res.redirect("/auth/login");
        return;
      }
      // Xử lý lỗi
      req.flash("msg", "Vui lòng kiểm tra lại thông tin");
      res.redirect("/auth/register");
    });
    return;
  },

  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
  },

  forgot: (req, res) => {
    res.render("auth/forgot");
  },

  handleForgot: async (req, res) => {
    const { email } = req.body;
    const token = jwt.sign(req.body, secret, { expiresIn: "900s" });
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const info = await transporter.sendMail({
      from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM}>`, // sender address
      to: email, // list of receivers
      subject: "Đặt lại mật khẩu", // Subject line
      html: `<p>Đây là link reset lại mật khẩu. </p>
          <p>Vui lòng ấn vào link để reset lại mật khẩu!!!</p>
          <a href='http://localhost:3000/auth/reset/${token}'>Reset Mật Khẩu</a>`, // html body
    });

    req.flash("success", "Gửi email thành công");
    res.redirect("/auth/login");
  },

  reset: async (req, res) => {
    const { token } = req.params;
    const msg = req.flash("error");
    const data = jwt.verify(token, secret);
    if (data) {
      const user = await User.findOne({
        where: { email: data.email },
      });
      req.flash("user", user);
      res.render("auth/reset", { msg });
      return;
    }
    res.send("Link đã hết hạn. Vui lòng gửi lại email");
  },

  handleReset: async (req, res) => {
    const { token } = req.params;
    const salt = 10;
    const user = req.flash("user");
    const { password, repassword } = req.body;
    if (password !== repassword) {
      req.flash("error", "Mật khẩu nhập lại không giống");
      res.redirect(`/auth/reset/${token}`);
      return;
    }
    bcrypt.hash(password, salt, async function (err, hash) {
      // Store hash in your password DB.
      const data = await User.update(
        { password: hash },
        {
          where: {
            email: user[0].email,
          },
        }
      );
      // insert name, email, password(hash) vào DB => Hoàn thiện phần đăng ký

      if (data) {
        req.flash("msg", "Cập nhập thành công");
        res.redirect("/auth/login");
        return;
      }
      // Xử lý lỗi
      req.flash("error", "Vui lòng kiểm tra lại thông tin");
      res.redirect(`/auth/reset/${token}`);
    });
    return;
  },
};
