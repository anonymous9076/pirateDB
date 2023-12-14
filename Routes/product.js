const express=require('express')
const productcontroller=require('../controller/product.js');
const ProductRouter=express.Router()

ProductRouter
.get('/',productcontroller.getAllProduct)
.get('/id=:id',productcontroller.getProduct)
.get('/category=:cat',productcontroller.getCategoryProduct);

exports.ProductRouter=ProductRouter;