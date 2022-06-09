const License = require('./model');
const db = require('../../config/connection/connectBD');
sequelize = db.sequelize;

/**
 * @exports
 * @implements {License}
 */
const LicenseService = {
  async findAll(){
    try {
      const users = await License.findAll()
      return users;
    } catch(error) {
      throw new Error(error.message)
    }
  }
}

module.exports = LicenseService;