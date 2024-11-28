// routes/constantRoutes.js

const express = require('express');
const router = express.Router();
const constantController = require('../controllers/constantController');
const {verifyAdmin} = require('../middleware/verifyToken');

// GET: Retrieve the commissionRate and driverBaseRate
router.get('/constants', constantsController.getConstants);

// PUT: Update the commissionRate and driverBaseRate
router.put('/constants', verifyAdmin, constantsController.updateConstants);

module.exports = router;
