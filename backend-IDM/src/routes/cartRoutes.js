const express = require('express');
const router = express.Router();
const { getCart, addToCart, removeFromCart, clearCart } = require('../controllers/cartController');

// Obtener carrito del usuario
router.get('/', getCart);

// Agregar producto al carrito
router.post('/add', addToCart);

// Eliminar un producto del carrito
router.post('/remove', removeFromCart);

// Vaciar carrito (finalizar compra)
router.post('/clear', clearCart);

module.exports = router;
