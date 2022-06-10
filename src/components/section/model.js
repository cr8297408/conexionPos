const { DataTypes, Model, UUIDV4 } = require('sequelize');
const db = require('../../config/connection/connectBD');
const License = require('../License/model')
sequelize = db.sequelize


const Section = sequelize.define('Section', {
  id: {
    type: DataTypes.STRING,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  // esta relacion hacerla al crear el modulo clientes
  user: {
    type: DataTypes.STRING,
  },
  logout_date: {
    type: DataTypes.DATE
  },
  token: {
    type: DataTypes.STRING,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
})

License.hasMany(Section)

module.exports = Section;