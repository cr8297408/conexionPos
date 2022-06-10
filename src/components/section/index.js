const SectionService = require('./service');

async function findAll(req, res, next) {
  try {
    const sections = await SectionService.findAll()
    res.status(200).json(sections)
  } catch (error) {
    res.json(error.message)
  }
}


async function create(req, res, next) {
  try {
    const section = await SectionService.create(req.body);
    res.status(201).json(section)
  } catch (error) {
    res.json(error.message)
  }
}

module.exports = {
  findAll,
  create
}