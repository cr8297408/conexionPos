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

    createLicense(params){
      const schema = joi.object().keys({
        client: Joi.string().required(),
        serial: Joi.string().required(),
        start_date: Joi.date().required(),
        expired_date: Joi.date().required(),
        nodes: Joi.number(),
        isActive: Joi.boolean()
      })

      return schema.validate(params)
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