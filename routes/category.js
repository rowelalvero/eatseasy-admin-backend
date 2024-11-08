const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

router.post("/categories", categoryController.createCategory);


router.get("/", categoryController.getAllCategories);


module.exports = router;