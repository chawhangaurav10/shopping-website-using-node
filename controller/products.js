const path = require('path');

const products = [];

exports.getAddProducts = (req,res,next)=>{
    
    res.render('add-product',{pageTitle:'Add Product',path:"/admin/add-product",formCSS:true,activeAddProduct:true,productCSS: true});
    
}

exports.postAddProducts = (req,res,next)=>{
    products.push({title: req.body.title});
    res.redirect('/');
    //res.send(req.body);
}

exports.getProducts = (req,res,next)=>{
    res.render('shop',{prods:products,pageTitle:'Shop',path:"/",hasProducts: products.length > 0,activeShop:true,productCSS: true});
}