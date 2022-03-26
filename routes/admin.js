const express = require('express');
const path  = require('path');
const router = express.Router();

const productsController = require('../controller/products');


// /admin/add-product => GET req
router.get('/add-product',productsController.getAddProducts);

// /admin/add-product => POST req
router.post('/add-product',productsController.postAddProducts);

module.exports ={
    routes: router
}