const express = require('express');
const path  = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const products = [];

// /admin/add-product => GET req
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    
});

// /admin/add-product => POST req
router.post('/add-product',(req,res,next)=>{
    products.push({title: req.body.title});
    res.redirect('/');
    //res.send(req.body);
});

module.exports ={
    routes: router,
    products: products
}