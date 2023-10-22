const model = require("../models/index");
const User = model.User;
const Role = model.Role;
module.exports = {
  index: async (req, res, next) => {
    if (req.user) {
      const { id } = req.user;
      const user = await User.findOne({
        where: id,
        include: {
          module: Role,
        },
      });
    }
  },
};
