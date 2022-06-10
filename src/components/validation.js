const joi = require('joi');

/**
 * @export
 * @class validation
 */

class validation {
  
  /**
   * @static
   * @type {string}
   * @memberof JoiSchema
   */
  readonly = 'argument passed in must be a string';

  /**
   * creates an instance of schema
   * @memberof JoiSchema
   */
  constructor(){
    this.customJoi = Joi.extend((joi) => ({
      type: 'string',
      base: joi.string(),
      messages: {
        objectId: this.objectId,
      },
      validate(value, helpers) {
        if (typeof(value) !== 'string') {
          return { value: value, errors: helpers.error('objectId')};
        }
      },
    }))
  }
}

module.exports = validation;