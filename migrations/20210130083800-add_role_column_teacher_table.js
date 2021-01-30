'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Teachers", "role", {type: Sequelize.STRING(20), allowNull: false})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Teachers', 'role');
  }
};
