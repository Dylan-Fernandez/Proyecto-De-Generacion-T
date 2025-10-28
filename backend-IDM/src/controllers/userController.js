const prisma = require('../db/connection');

module.exports = {
  getProfile: async (req, res) => {
    const user = req.user;
    res.json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address
    });
  },

  updateProfile: async (req, res) => {
    try {
      const data = req.body; // permitir firstName, lastName, email, address
      const updated = await prisma.user.update({
        where: { id: req.user.id },
        data
      });
      res.json({ message: 'Perfil actualizado', user: updated });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al actualizar' });
    }
  }
};
