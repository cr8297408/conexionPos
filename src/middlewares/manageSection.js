const License = require('../components/License/model');
const Section = require('../components/section/model');

const count = {
  async countSection(idLicense){

    try {
      const license = await License.findByPk(idLicense)
      if (!license || !license.isActive) {
        return false
      }
      const nodes = license.nodes;
      
      const sections = await Section.findAndCountAll({ where: {
        LicenseId: idLicense
      }})
  
      if(sections.count >= nodes){
        return false
      } else {
        return true
      }
    
    } catch (error) {
      throw new Error(error.message)
    }
  
  
  
  }
}

module.exports = count;