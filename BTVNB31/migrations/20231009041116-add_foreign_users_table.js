"use strict";

const { INTEGER } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    return Promise.all([
      queryInterface.changeColumn(
        "users",
        "provider_id",
        {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: {
              tableName: "providers",
            },
            key: "id",
          },
        },
        {
          transaction,
        }
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint("users");
  },
};
