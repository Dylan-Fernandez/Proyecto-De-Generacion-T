const prisma = require('../config/connection');

//Obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await prisma.products.findMany({
      orderBy: { id: 'asc' },
    });
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

//Crear un nuevo producto (solo si lo necesitas para pruebas)
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;

    const product = await prisma.products.create({
      data: { name, description, price: parseFloat(price), imageUrl },
    });

    res.status(201).json(product);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ message: 'Error al crear producto', error });
  }
};
