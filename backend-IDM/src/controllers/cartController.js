const prisma = require('../db/connection');

module.exports = {
  getCart: async (req, res) => {
    let cart = await prisma.cart.findFirst({
      where: { userId: req.user.id },
      include: { items: { include: { product: true } } }
    });
    if (!cart) {
      cart = await prisma.cart.create({ data: { userId: req.user.id } , include: { items: true }});
    }
    res.json(cart);
  },

  addItem: async (req, res) => {
    const { productId, quantity = 1 } = req.body;
    let cart = await prisma.cart.findFirst({ where: { userId: req.user.id }});
    if (!cart) {
      cart = await prisma.cart.create({ data: { userId: req.user.id }});
    }

    // Si ya existe el item, incrementar
    const existing = await prisma.cartItem.findFirst({
      where: { cartId: cart.id, productId: parseInt(productId) }
    });

    if (existing) {
      const updated = await prisma.cartItem.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + parseInt(quantity) }
      });
      return res.json(updated);
    }

    const item = await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: parseInt(productId),
        quantity: parseInt(quantity)
      },
      include: { product: true }
    });

    res.json(item);
  },

  removeItem: async (req, res) => {
    const { cartItemId } = req.body;
    await prisma.cartItem.delete({ where: { id: parseInt(cartItemId) }});
    res.json({ message: 'Item eliminado' });
  },

  clearCart: async (req, res) => {
    const cart = await prisma.cart.findFirst({ where: { userId: req.user.id }});
    if (cart) {
      await prisma.cartItem.deleteMany({ where: { cartId: cart.id }});
    }
    res.json({ message: 'Carrito vaciado' });
  }
};
