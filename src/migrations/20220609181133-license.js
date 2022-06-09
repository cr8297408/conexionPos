'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('License', {
      id: Sequelize.DataTypes.STRING,
      client: Sequelize.DataTypes.STRING,
      serial: Sequelize.DataTypes.STRING,
      start_date: Sequelize.DataTypes.DATE,
      espired_date: Sequelize.DataTypes.DATE,
      nodes: Sequelize.DataTypes.INTEGER,
      isActive: Sequelize.DataTypes.BOOLEAN
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
