const { DataTypes, Model, UUIDV4} = require('sequelize');
const db = require('../../config/connection/connectBD');
sequelize = db.sequelize;
Sequelize = db.Sequelize;

const License = sequelize.define('License', {
  id: {
    type: DataTypes.STRING,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  client: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  expired_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nodes: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  isActive:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})
// class License extends Model {}

// License.init({
//   id: {
//     type: DataTypes.STRING,
//     defaultValue: UUIDV4,
//     primaryKey: true
//   },
//   client: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   serial: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   start_date: {
//     type: DataTypes.DATE,
//     allowNull: false
//   },
//   expired_date: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   nodes: {
//     type: DataTypes.INTEGER,
//     defaultValue: 1
//   },
//   isActive:{
//     type: DataTypes.BOOLEAN,
//     defaultValue: false
//   }
// },{
//   sequelize,
//   modelName: 'License'
// })

module.exports = License;