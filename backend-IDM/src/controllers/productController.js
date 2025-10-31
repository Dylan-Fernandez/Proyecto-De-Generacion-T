const prisma = require("../config/connection");
function buildFullUrl(req, filePath) {
  const protocol = req.protocol;
  const host = req.get("host");
  const cleaned = filePath.startsWith("/") ? filePath : `/${filePath}`;
  return `${protocol}://${host}${cleaned}`;
}

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

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    let imageUrl = null;
    if (req.file) {
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

