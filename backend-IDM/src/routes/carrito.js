const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const cartController = require('../controllers/cartController');

router.use(auth);

router.get('/', cartController.getCart); 
router.post('/add', cartController.addItem); 
router.post('/remove', cartController.removeItem); 
router.post('/clear', cartController.clearCart);

module.exports = router;
