'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Teacher", "role", {type: Sequelize.STRING(20), allowNull: false})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Teacher", "role")
  }
};