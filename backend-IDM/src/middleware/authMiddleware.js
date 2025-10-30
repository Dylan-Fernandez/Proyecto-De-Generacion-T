// src/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "clave-super-secreta";

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No se envió token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // { id, email, iat, exp }
    next();
  } catch (error) {
    console.error("authMiddleware error:", error.message);
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};

module.exports = authenticate;
