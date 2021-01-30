'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Teachers", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      teacherid: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      firstname: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      phonenumber1: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      phonenumber2: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      website: {
        type: Sequelize.STRING(120),
        allowNull: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Teachers");
  }
};
