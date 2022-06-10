const Section = require('./model');
const db = require('../../config/connection/connectBD');
const SectionValidation = require('./validation');
const count = require('../../middlewares/manageSection');

sequelize = db.sequelize

/**
 * @exports
 * @implements {Section} model
 */
const SectionService = {
  async findAll(){
    try {
      const sections = await Section.findAll()
      return sections;
    } catch (error) {
      throw new Error(error.message)
    }
  },

  async create(body){
    try {
      const validate = SectionValidation.createSection(body)
      if (validate.error) {
        throw new Error(error.message)
      }

      const isValidSection = await count.countSection(body.LicenseId)
      console.log('result -------------------',isValidSection);
      if (isValidSection) {
        const section = await Section.create(body);
        return section;
      }

      return 'you can not open more sections'

    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = SectionService;