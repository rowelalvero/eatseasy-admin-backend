// routes/constantRoutes.js

const router = require('express').Router();
const constantController = require('../controllers/constantController');
const {verifyAdmin} = require('../middleware/verifyToken');

// GET: Retrieve the commissionRate and driverBaseRate
router.get('/', constantsController.getConstants);

// PUT: Update the commissionRate and driverBaseRate
router.put('/', verifyAdmin, constantsController.updateConstants);

module.exports = router;
