const express = require('express');
const router = express.Router();
const { clearCart } = require('../controllers/cartController');

router.post('/clear', clearCart);

module.exports = router;
