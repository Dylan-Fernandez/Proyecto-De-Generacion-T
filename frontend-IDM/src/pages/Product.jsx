import { useState } from "react";
import "./Products.css";

const sampleProducts = [
  { 
    id: 1, 
    name: "Botonera a flechas IDM", 
    price: 1200, 
    img: "/assets/test.jpg",
    description: "Botonera a flechas para que los chicos puedan interactuar fácilmente con el sistema."
  },
  { 
    id: 2, 
    name: "Detector de iris IDM", 
    price: 800, 
    img: "/assets/test.jpg",
    description: "Detector de iris con alta precisión, para los chicos con dificultades al mover todas sus extremidades."
  },
  { 
    id: 3, 
    name: "Botonera desplegable y plegable", 
    price: 1500, 
    img: "/assets/test.jpg",
    description: "Diseño ergonómico y resistente, para los chicos que necesiten un acceso más cómodo a los controles."
  },
];

const Products = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="products-section">
      <h2 className="products-title">Productos destacados</h2>

      <div className="products-grid">
        {sampleProducts.map((p) => (
          <div
            className="product-card"
            key={p.id}
            onClick={() => setSelectedProduct(p)}
          >
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={(e) => { e.stopPropagation(); addToCart(p); }}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.img} alt={selectedProduct.name} />
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