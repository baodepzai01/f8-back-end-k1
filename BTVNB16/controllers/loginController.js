module.exports = {
  add: (req, res) => {
    const { msg } = req.session;

    delete req.session.msg;
    return res.render("login/login", { msg });
  },

  handleAdd: (req, res) => {
    res.send("Thành Công");
    const { name, pass } = req.body;
    req.session.msg = "Vui lòng nhập đầy đủ thông tin";
    if (username === "vanbao@gmail.com" && password === "123456") {
      res.send("Đăng nhập thành công!");
    } else {
      res.send("Đăng nhập thất bại!");
    }
    res.redirect("/dang-nhap/login");
  },
};
