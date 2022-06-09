const express = require('express')
const LicenseRouter = require('./License');
const router = express.Router();

router.use('/v1/licences', LicenseRouter)

module.exports = router;
