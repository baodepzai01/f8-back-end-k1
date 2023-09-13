const { DataTypes } = require("sequelize");

const login_user = async () => {
  const sequelize = await require("../utils/db");
  return sequelize.define(
    "login_user",
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = login_user();
