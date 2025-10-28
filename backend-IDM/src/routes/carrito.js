const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const cartController = require('../controllers/cartController');

router.use(auth);

router.get('/', cartController.getCart); // obtener carrito del usuario
router.post('/add', cartController.addItem); // { productId, quantity }
router.post('/remove', cartController.removeItem); // { cartItemId }
router.post('/clear', cartController.clearCart);

module.exports = router;
