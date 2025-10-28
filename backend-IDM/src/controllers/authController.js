const prisma = require("../config/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "clave-super-secreta"; //cámbiala o usa .env

//Registro de usuario
const registerUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email y contraseña son obligatorios" });
    }

    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return res.status(201).json({
      message: "Usuario registrado correctamente",
      user: { id: newUser.id, email: newUser.email, name: newUser.name },
    });
  } catch (error) {
    console.error("Error detallado en registerUser:", error);
    res.status(500).json({ message: "Error al registrar usuario", error: error.message });
  }

};

//Login de usuario
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; //antes decía "contraseña"

    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "2h" });

    res.json({
      message: "Inicio de sesión exitoso",
      token,
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (error) {
    console.error("Error en loginUser:", error.message);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};

module.exports = { registerUser, loginUser };
