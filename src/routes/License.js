const { Router } = require('express');
const { LicenseComponent } = require('../components');

const License = require('../components/License');

const router = Router();


/**
 * GET method route
 * @example http://localhost:PORT/v1/licenses
 *
 * @swagger
 * /v1/licenses:
 *   get:
 *     description: Get all stored licenses in Database
 *     tags: ["licenses"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of licenses
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Licenses'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */

router.get('/', LicenseComponent.findAll)

module.exports = router;