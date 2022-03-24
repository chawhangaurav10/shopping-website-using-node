const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const userData = require('./admin');

router.get('/',(req,res,next)=>{
    console.log('adminData',userData.products);
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;