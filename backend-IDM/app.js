const express = require("express");
const cors = require("cors");
const app = express();
const productRoutes = require("./src/routes/productRoutes");

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.listen(5000, () => console.log("🚀 Servidor corriendo en http://localhost:5000"));
