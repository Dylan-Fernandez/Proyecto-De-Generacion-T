const express = require('express');
const router = express.Router()
const productoController = require('../controllers/productController')
router.get("/", productoController.getAll);
router.get('/', (req, res) => {
  const products = [
    { id: 1, name: "Notebook Gamer", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Auriculares", price: 150 },
    { id: 4, name: "Teclado Mecánico", price: 120 },
    { id: 5, name: "Mouse Inalámbrico", price: 60 },
    { id: 6, name: "Monitor 27''", price: 300 },
    { id: 7, name: "Impresora Láser", price: 250 },
    { id: 8, name: "Tablet 10''", price: 400 },
    { id: 9, name: "Smartwatch", price: 200 },
    { id: 10, name: "Cámara Web HD", price: 90 }
  ];

  res.json(products);
});
router.get('/productos/:id', (req, res) => {
  const id = req.params.id;
})
router.post('/productos', (req, res) => {
  const nuevoProdusto = req.body;
  res.json({ mensaje: "producto creado corecctamente", status: "ok", data: nuevoProdusto })
})
router.put('/productos/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  res.json({ mensaje: `Producto ${id} actualizado`, data: data });
});
router.delete('/productos/:id', (req, res) => {
  const { id } = req.params;
  res.json({ mensaje: `Producto ${id} eliminado` });
});
module.exports = router;