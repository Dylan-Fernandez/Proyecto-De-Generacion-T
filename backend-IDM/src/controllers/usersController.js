const prisma = require('../config/connection');
const bcrypt = require('bcrypt');

module.exports = {
  updateProfile: async (req, res) => {
    try {
      const { name, email, password, address } = req.body;

      let updatedData = { name, email };

      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updatedData.password = hashedPassword;
      }

      const updatedUser = await prisma.users.update({
        where: { id: req.user.id }, 
        data: updatedData
      });

      if (address) {
        const existingAddress = await prisma.addresses.findFirst({
          where: {
            userId: req.user.id, 
          }
        });

        if (existingAddress) {
          const userAddress = await prisma.addresses.update({
            where: { id: existingAddress.id }, 
            data: {
              street: address.street,
              city: address.city,
              state: address.state,
              country: address.country,
              postal: address.postal || ""
            }
          });
          console.log("Dirección actualizada:", userAddress);
        } else {
          const userAddress = await prisma.addresses.create({
            data: {
              userId: req.user.id, 
              street: address.street,
              city: address.city,
              state: address.state,
              country: address.country,
              postal: address.postal || ""
            }
          });
          console.log("Dirección creada:", userAddress);
        }
      }

      res.json({ message: "Perfil actualizado correctamente", user: updatedUser });
    } catch (err) {
      res.status(500).json({ message: "Error al actualizar el perfil", error: err });
    }
  }
};
