"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Customers", [
      {
        name: "banhbao01",
        email: "banhbao01@gmaul.com",
        password: md5("123456"),
        status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "banhbao02",
        email: "banhbao02@gmail.com",
        password: md5("123456"),
        status: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Customers", null, {});
  },
};
