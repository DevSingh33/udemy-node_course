const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product',adminController.getAddProduct);  //using the method (getAddProduct()) from the controllers folder

// /admin/products => GET
router.get('/products',);

// /admin/add-product => POST
router.post('/add-product',adminController.postAddProducts );

module.exports = router;
