// src/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../db/connection');

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  register: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      if (!firstName || !email || !password) {
        return res.status(400).json({ message: 'Faltan datos' });
      }
      const existing = await prisma.user.findUnique({ where: { email }});
      if (existing) return res.status(400).json({ message: 'Email ya registrado' });

      const hash = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: { firstName, lastName, email, password: hash }
      });

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, user: { id: user.id, email: user.email, firstName: user.firstName }});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error en registro' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({ where: { email }});
      if (!user) return res.status(400).json({ message: 'Credenciales inválidas' });

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return res.status(400).json({ message: 'Credenciales inválidas' });

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, user: { id: user.id, email: user.email, firstName: user.firstName }});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error en login' });
    }
  }
};
