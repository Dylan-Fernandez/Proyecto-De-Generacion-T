const express = require('express')
const cors = require('cors')
const app = express();
const productosRouter = require('./src/routes/productosRouteo')

app.use(express.json());

app.use(cors())

app.use('/pruductos',productosRouter)

app.listen(3000, () => {
    console.log("server rennning at http://localhost:3000/")
})