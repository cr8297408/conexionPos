const {Router} = require('express');
const { SectionComponent } = require('../components');

const SectionService = require('../components/License/service');

const router = Router();

router.get('/', SectionComponent.findAll)


router.post('/', SectionComponent.create)

module.exports = router;