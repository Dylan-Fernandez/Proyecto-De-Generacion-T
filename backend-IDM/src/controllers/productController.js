const prisma = require("../config/connection");

//Helper para construir URL completa de la imagen
function buildFullUrl(req, filePath) {
  const protocol = req.protocol;
  const host = req.get("host"); // incluye puerto si aplica
  //filePath ya tendrá formato "/uploads/filename.ext" o "uploads/filename.ext"
  const cleaned = filePath.startsWith("/") ? filePath : `/${filePath}`;
  return `${protocol}://${host}${cleaned}`;
}

//Obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await prisma.products.findMany({
      orderBy: { id: "asc" },
    });
    res.json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ message: "Error al obtener productos", error });
  }
};

//Crear producto (acepta form-data con campo "image" para la imagen)
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    let imageUrl = null;
    if (req.file) {
      //req.file.path es la ruta local; guardamos la URL completa
      const relativePath = `/uploads/${req.file.filename}`;
      imageUrl = buildFullUrl(req, relativePath);
    }

    const product = await prisma.products.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        imageUrl,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ message: "Error al crear producto", error });
  }
};

// Actualizar la imagen de un producto existente
exports.uploadProductImage = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.file) {
      return res.status(400).json({ message: "No se envió ninguna imagen" });
    }

    const relativePath = `/uploads/${req.file.filename}`;
    const imageUrl = buildFullUrl(req, relativePath);

    const product = await prisma.products.update({
      where: { id: Number(id) },
      data: { imageUrl },
    });

    res.json({
      message: "Imagen actualizada correctamente",
      product,
    });
  } catch (error) {
    console.error("Error al subir imagen:", error);
    res.status(500).json({ message: "Error al subir imagen", error });
  }
};

