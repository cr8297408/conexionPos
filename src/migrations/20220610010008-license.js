'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('license', {
      id: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      // despues hay que asociarlo al modulo cliente
      client: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      serial: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      start_date: Sequelize.DataTypes.DATE,
      espired_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      nodes: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 1
      },
      isActive: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('license');
  }
};