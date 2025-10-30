// src/routes/authRoutes.js

const express = require('express');
const router = express.Router();

// Importamos también la nueva función "verifyToken"
const { loginUser, registerUser, verifyToken } = require('../controllers/authController');

// 🔹 Ruta para iniciar sesión
router.post('/login', loginUser);

// 🔹 Ruta para registrar usuario
router.post('/register', registerUser);

// 🔹 NUEVA RUTA: verificar token (mantener sesión activa)
router.get('/verify', verifyToken);

module.exports = router;
