
const express = require('express');
const router = express.Router();
const userData = require('./admin');

const shopController = require('../controller/shop');

router.get('/',shopController.getIndex);
router.get('/products',shopController.getProducts);
router.get('/products/:productId',shopController.getProduct);
router.get('/product-detail',shopController.getProduct);
router.get('/cart',shopController.getCart);
router.post('/cart',shopController.postCart);
router.get('/orders',shopController.getOrders);
router.get('/checkout',shopController.getCheckout);

module.exports = router;