const roleuser = require("../utils/roleuser");
module.exports = {
  read: async function (req, res, next) {
    next();
  },
  add: async function (req, res, next) {
    const permissions = await roleuser(req);
    if (!permissions.includes("users.add")) {
      res.redirect("/users");
      return;
    }
    next();
  },
};
