const LicenseService = require('./service');


async function findAll(req, res, next) {
  try {
    const licenses = await LicenseService.findAll()
    res.status(200).json(licenses)
  } catch (error) {
    res.json(error.message)
  }
}

async function create(req, res, next){
  try {
    const license = await LicenseService.create(req.body);
    res.status(201).json(license)
  
  } catch (error) {
    res.json(error.message)
  }
}


module.exports = {
  findAll,
  create
}