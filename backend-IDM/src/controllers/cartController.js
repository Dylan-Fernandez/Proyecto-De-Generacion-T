const prisma = require('../config/connection');
const jwt = require('jsonwebtoken');

//Middleware auxiliar para obtener el usuario desde el token
const getUserFromToken = (req) => {
  const header = req.headers.authorization;
  if (!header) return null;
  const token = header.split(' ')[1];
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
};

//Vaciar carrito del usuario autenticado
exports.clearCart = async (req, res) => {
  try {
    const user = getUserFromToken(req);
    if (!user) return res.status(401).json({ message: 'Token inválido o faltante' });

    const cart = await prisma.carts.findFirst({
      where: { userId: user.id },
      include: { CartItems: true },
    });

    if (!cart) {
      return res.json({ message: 'Carrito ya vacío' });
    }

    //Eliminar items del carrito
    await prisma.cartItems.deleteMany({
      where: { cartId: cart.id },
    });

    res.json({ message: 'Compra finalizada. Carrito vaciado.' });
  } catch (error) {
    console.error('Error al vaciar carrito:', error);
    res.status(500).json({ message: 'Error al procesar compra', error });
  }
};
