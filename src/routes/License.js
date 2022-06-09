const { Router } = require('express');
const { LicenseComponent } = require('../components');

const License = require('../components/License');

const router = Router();

router.get('/', LicenseComponent.findAll)

module.exports = router;