const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct } = require('../controllers/productController');

//Rutas de productos
router.get('/', getAllProducts);
router.post('/', createProduct);

module.exports = router;
