
const express = require('express');
const router = express.Router();
const userData = require('./admin');

const productsController = require('../controller/products');

router.get('/',productsController.getProducts);

module.exports = router;