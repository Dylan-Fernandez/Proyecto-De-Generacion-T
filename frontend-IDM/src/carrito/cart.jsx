import { useEffect, useState } from "react";
import "./Cart.css";

const API_URL = "http://localhost:4000/api/cart";

function Cart({ cart, removeFromCart, updateQuantity }) {
  const [loading, setLoading] = useState(false);
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Debes iniciar sesión para comprar.");
      return;
    }

    try {
      setLoading(true);

      //Vaciar carrito en backend (simulación de compra final)
      await fetch(`${API_URL}/clear`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      alert(
        `¡MUCHAS GRACIAS POR COMPRAR!\nSu pedido se tramitará en las próximas 24hs.\n\nTotal pagado: $${total.toFixed(
          2
        )}`
      );
      localStorage.removeItem("cart");
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Error al procesar la compra.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="cart-container">
  <h1>🛒 Tu carrito</h1>

  {cart.length === 0 ? (
    <p className="empty">Tu carrito está vacío.</p>
  ) : (
    <>
      {cart.map((p) => (
        <div className="cart-item" key={p.id}>
          <div className="cart-image">
            <img
              src={p.imageUrl || p.img || "https://via.placeholder.com/80"}
              alt={p.name}
            />
          </div>
          <div className="cart-name">
            <h3>{p.name}</h3>
          </div>
          <div className="cart-price">
            <p>${p.price}</p>
          </div>
          <div className="cart-controls-vertical">
            <button onClick={() => updateQuantity(p.id, -1)}>-</button>
            <span>{p.quantity}</span>
            <button onClick={() => updateQuantity(p.id, 1)}>+</button>
            <button
              className="remove"
              onClick={() => removeFromCart(p.id)}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
      <h2 className="cart-total">Total: ${total.toFixed(2)}</h2>
      <button
        className="checkout"
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? "Procesando..." : "Finalizar compra"}
      </button>
    </>
  )}
</div>

  );
}

export default Cart;
