const Joi = require('joi');
const License = require('./model');

/**
 * @export
 * @class LicenseValidation
 * 
 */
class LicenseValidation {
    /**
     * create an instance of LicenseValidation
     * @memberof LicenseValidation
     * @param {Licence}
     * @returns {Joi.validationResult}
     */

    createLicense(body){
      const schema = Joi.object().keys({
        client: Joi.string().required(),
        serial: Joi.string().required(),
        start_date: Joi.date(),
        expired_date: Joi.date().required(),
        nodes: Joi.number(),
        isActive: Joi.boolean()
      })

      return schema.validate(body)
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof UserValidation
     */
     getLicense(id) {
      const schema = Joi.object().keys({
          id: Joi.string().required(),
      });

      return schema.validate(id);
  }
}
module.exports = new LicenseValidation();