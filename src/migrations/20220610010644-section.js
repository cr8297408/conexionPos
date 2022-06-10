'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('section', {
      id: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull:false
      },
      LicenseId: {
        type: Sequelize.DataTypes.STRING,
        references: {
          model: {
            tableName: 'license'
          }
        },
        allowNull: false
      },
      // despues hay que asociarlo al modulo user
      user: {
        type: Sequelize.DataTypes.STRING,
        allowNull:false
      },
      logout_date: Sequelize.DataTypes.DATE,
      token: Sequelize.DataTypes.STRING,
      isActive: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('section');
  }
};
