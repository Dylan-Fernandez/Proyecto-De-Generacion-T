const productoServer = require("../services/productosServece")
async function getAll(req, res) {
    try {
        const data = await productoServer.getProducto()
        res.json(data)

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
module.exports={getAll}