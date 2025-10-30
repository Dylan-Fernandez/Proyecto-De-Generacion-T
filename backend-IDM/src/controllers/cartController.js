const prisma = require('../config/connection');
const jwt = require('jsonwebtoken');

// Middleware para obtener el usuario desde el token
const getUserFromToken = (req) => {
  const header = req.headers.authorization;
  if (!header) return null;
  
  // Extraer token del header
  const token = header.split(' ')[1];
  
  if (!token) return null;

  try {
    // Verificar el token con la clave secreta
    return jwt.verify(token, process.env.JWT_SECRET);  // Usar 'JWT_SECRET' desde el .env
  } catch (error) {
    console.error("Error al verificar token:", error.message);
    return null; // Devolver null si hay error al verificar el token
  }
};

// ✅ Obtener carrito
exports.getCart = async (req, res) => {
  try {
    const user = getUserFromToken(req);
    if (!user) return res.status(401).json({ message: 'Token inválido o faltante' });

    const cart = await prisma.carts.findFirst({
      where: { userId: user.id },
      include: { CartItems: { include: { product: true } } },
    });

    if (!cart) return res.json({ items: [] });

    res.json({
      items: cart.CartItems.map(item => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        imageUrl: item.product.imageUrl,
        quantity: item.quantity,
      })),
    });
  } catch (error) {
    console.error('Error al obtener carrito:', error);
    res.status(500).json({ message: 'Error al obtener carrito', error });
  }
};

// ✅ Agregar producto
exports.addToCart = async (req, res) => {
  try {
    const user = getUserFromToken(req);
    if (!user) return res.status(401).json({ message: 'Token inválido o faltante' });

    const { productId, quantity } = req.body;

    // Buscar o crear carrito
    let cart = await prisma.carts.findFirst({ where: { userId: user.id } });
    if (!cart) cart = await prisma.carts.create({ data: { userId: user.id } });

    // Verificar si ya existe el producto
    const existing = await prisma.cartItems.findFirst({
      where: { cartId: cart.id, productId },
    });

    if (existing) {
      await prisma.cartItems.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + quantity },
      });
    } else {
      await prisma.cartItems.create({
        data: { cartId: cart.id, productId, quantity },
      });
    }

    res.json({ message: 'Producto agregado al carrito' });
  } catch (error) {
    console.error('Error al agregar producto:', error);
    res.status(500).json({ message: 'Error al agregar producto', error });
  }
};

// ✅ Eliminar producto
exports.removeFromCart = async (req, res) => {
  try {
    const user = getUserFromToken(req);
    if (!user) return res.status(401).json({ message: 'Token inválido o faltante' });

    const { productId } = req.body;

    const cart = await prisma.carts.findFirst({ where: { userId: user.id } });
    if (!cart) return res.status(404).json({ message: 'Carrito no encontrado' });

    await prisma.cartItems.deleteMany({
      where: { cartId: cart.id, productId },
    });

    res.json({ message: 'Producto eliminado del carrito' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ message: 'Error al eliminar producto', error });
  }
};

// ✅ Vaciar carrito
exports.clearCart = async (req, res) => {
  try {
    const user = getUserFromToken(req);
    if (!user) return res.status(401).json({ message: 'Token inválido o faltante' });

    const cart = await prisma.carts.findFirst({
      where: { userId: user.id },
      include: { CartItems: true },
    });

    if (!cart) return res.json({ message: 'Carrito ya vacío' });

    await prisma.cartItems.deleteMany({ where: { cartId: cart.id } });

    res.json({ message: 'Compra finalizada. Carrito vaciado.' });
  } catch (error) {
    console.error('Error al vaciar carrito:', error);
    res.status(500).json({ message: 'Error al procesar compra', error });
  }
};
