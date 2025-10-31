const express = require('express');
const router = express.Router();
const { loginUser, registerUser, verifyToken } = require('../controllers/authController');

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/verify', verifyToken);

module.exports = router;
