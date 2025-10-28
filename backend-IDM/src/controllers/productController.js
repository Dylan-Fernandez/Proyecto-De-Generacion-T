const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  try {
    const product = await prisma.product.create({
      data: { name, description, price, imageUrl },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
};
