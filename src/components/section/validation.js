const Joi = require('joi');
const Section = require('./model');

/**
 * @export
 * @class LicenseValidation
 * 
 */
 class SectionValidation {
  /**
   * create an instance of SectionValidation
   * @memberof SectionValidation
   * @param {Section}
   * @returns {Joi.validationResult}
   */

  createSection(body){
    const schema = Joi.object().keys({
      user: Joi.string().required(),
      LicenseId: Joi.string(),
      token: Joi.string(),
      logout_date: Joi.date(),
      isActive: Joi.boolean()
    })

    return schema.validate(body)
  }

  /**
   * @param {id} body
   * @returns {Joi.ValidationResult}
   * @memberof UserValidation
   */
   getSection(id) {
    const schema = Joi.object().keys({
        id: Joi.string().required(),
    });

    return schema.validate(id);
}
}
module.exports = new SectionValidation();