const express = require('express')
const LicenseRouter = require('./License');
const SectionRouter = require('./Section');
const router = express.Router();

router.use('/v1/licenses', LicenseRouter);
router.use('/v1/sections', SectionRouter);

module.exports = router;
