const LicenseService = require('./service');


async function findAll(req, res, next) {
  try {
    const users = await LicenseService.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.json(error.message)
  }
}


module.exports = {
  findAll,
}