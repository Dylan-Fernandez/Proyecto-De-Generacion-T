const express = require('express');
const router = express.Router();
const { updateProfile } = require('../controllers/usersController');
const authenticate = require('../middleware/authMiddleware');

router.put('/update', authenticate, updateProfile);

module.exports = router;
