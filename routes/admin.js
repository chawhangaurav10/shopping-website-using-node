const express = require('express');
const path  = require('path');
const router = express.Router();

const adminController = require('../controller/admin');


// /admin/add-product => GET req
router.get('/add-product',adminController.getAddProducts);

// /admin/products => GET req
router.get('/products',adminController.getProducts);

// /admin/add-product => POST req
router.post('/add-product',adminController.postAddProducts);

// /admin/edit-product/ => GET req
router.get('/edit-product/:productId',adminController.getEditProduct);

// /admin/edit-product/ => POST req
router.post('/edit-product/',adminController.postEditProduct);

module.exports ={
    routes: router
}