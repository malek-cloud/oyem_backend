const productsController = require('../controllers/products');
const express = require('express');
const route = express.Router();
route.get('/', productsController.getProducts);
route.get('/detail/:productId', productsController.getProduct);
module.exports = route ;