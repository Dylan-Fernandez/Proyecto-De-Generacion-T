import { useEffect, useState } from "react";
import "./Products.css";

const API_URL = "http://localhost:5000/api/products";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 🟢 Cargar productos desde el backend
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

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
            <img src={p.imageUrl || p.img || "/assets/test.jpg"} alt={p.name} />
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
              src={selectedProduct.imageUrl || "/assets/test.jpg"}
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
