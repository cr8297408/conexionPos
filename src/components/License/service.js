const License = require('./model');
const db = require('../../config/connection/connectBD');
const LicenseValidation = require('./validation');

sequelize = db.sequelize;

/**
 * @exports
 * @implements {License} model
 */
const LicenseService = {
  async findAll(){
    try {
      const licenses = await License.findAll()
      return licenses;
    } catch(error) {
      throw new Error(error.message)
    }
  },

  /**
   * @exports
   * @param {*} body
   * @implements {License} model 
   */
  async create(body) {
    try {
      const validate = LicenseValidation.createLicense(body);
      if (validate.error) {
        throw new Error(validate.error)
      }

      const license = await License.create(body);
      return license;

    } catch (error) {
      throw new Error(error.message)
    }
  },


}

module.exports = LicenseService;