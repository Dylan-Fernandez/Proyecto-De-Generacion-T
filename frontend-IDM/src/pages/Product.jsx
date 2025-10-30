import { useEffect, useState } from "react";
import "./Products.css";

const API_URL = "http://localhost:5000/api/products";
const BACKEND_URL = "http://localhost:5000";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return "/assets/test.jpg";
    if (imageUrl.startsWith("http")) return imageUrl;
    return `${BACKEND_URL}${imageUrl}`;
  };

  return (
    <div className="products-section">
      <h2 className="products-title">Productos destacados</h2>

      <div className="products-grid">
        {products.map((p) => (
          <div
            className="product-card"
            key={p.id}
            onClick={() => setSelectedProduct(p)}
          >
            <img src={getImageUrl(p.imageUrl)} alt={p.name} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(p);
              }}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={getImageUrl(selectedProduct.imageUrl)}
              alt={selectedProduct.name}
            />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p className="modal-price">${selectedProduct.price}</p>
            <button
              className="modal-add-btn"
              onClick={() => addToCart(selectedProduct)}
            >
              Agregar al carrito
            </button>
            <button
              className="close-btn"
              onClick={() => setSelectedProduct(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
