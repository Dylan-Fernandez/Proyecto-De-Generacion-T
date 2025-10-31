// app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require('dotenv').config();   
const productRoutes = require("./src/routes/productRoutes");
const cartRoutes = require("./src/routes/cartRoutes");
const authRoutes = require("./src/routes/authRoutes");
const userRouter = require('./src/routes/userRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Servir la carpeta uploads públicamente
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Rutas principales
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/user', userRouter);
app.get("/", (req, res) => {
  res.send("✅ API funcionando correctamente");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
