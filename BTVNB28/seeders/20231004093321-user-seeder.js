"use strict";

const md5 = require("md5");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Bao",
        email: "bao@gmail.com",
        password: md5("123"),
        role: 0,
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hoang An",
        email: "hoangan@gmail.com",
        password: md5("123"),
        status: 0,
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Duong",
        email: "Duong@gmail.com",
        password: md5("123"),
        status: 1,
        role: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
