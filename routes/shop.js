
const express = require('express');
const router = express.Router();
const userData = require('./admin');

const shopController = require('../controller/shop');

router.get('/',shopController.getIndex);
router.get('/products',shopController.getProducts);
router.get('/cart',shopController.getCart);
router.get('/checkout',shopController.getCheckout);

module.exports = router;