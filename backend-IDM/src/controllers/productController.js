const prisma = require('../db/connection');
const path = require('path');

module.exports = {
  getAll: async (req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
  },

  getOne: async (req, res) => {
    const id = parseInt(req.params.id);
    const product = await prisma.product.findUnique({ where: { id }});
    if (!product) return res.status(404).json({ message: 'No encontrado' });
    res.json(product);
  },

  create: async (req, res) => {
    try {
      const { name, description, price } = req.body;
      let imageUrl = null;
      if (req.file) {
        imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
      }
      const product = await prisma.product.create({
        data: { name, description, price: parseFloat(price), imageUrl }
      });
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creando producto' });
    }
  },

  update: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = { ...req.body };
      if (req.file) {
        data.imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
      }
      if (data.price) data.price = parseFloat(data.price);
      const product = await prisma.product.update({ where: { id }, data });
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error actualizando' });
    }
  },

  remove: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await prisma.product.delete({ where: { id }});
      res.json({ message: 'Eliminado' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error eliminando' });
    }
  }
};
