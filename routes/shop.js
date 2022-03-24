const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const userData = require('./admin');

router.get('/',(req,res,next)=>{
    const products = userData.products;
    res.render('shop',{prods:products,pageTitle:'Shop',path:"/"});
});

module.exports = router;