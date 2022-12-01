const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product',productsController.getAddProduct);  //using the method (getAddProduct()) from the controllers folder

// /admin/add-product => POST
router.post('/add-product',productsController.postAddProducts );

module.exports = router;
