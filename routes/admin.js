const productsController = require('../controllers/products');
const express = require('express');
const route = express.Router();
route.get('/add-products', productsController.getAddProduct);
route.post('/add-products', productsController.postAddProduct);
route.post('/edit-product', productsController.postEditProduct);
route.get('/edit-product/:productId', productsController.getEditProduct);



module.exports = route;