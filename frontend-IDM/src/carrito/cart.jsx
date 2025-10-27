import { useEffect } from "react";
import "./Cart.css";

function Cart({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const handleCheckout = () => {
    alert(
      `¡MUCHAS GRACIAS POR COMPRAR!\nSu pedido se estará tramitando dentro de las próximas 24hs.\n\nTotal pagado: $${total.toFixed(2)}`
    );
    localStorage.removeItem("cart");
    window.location.reload();
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
              <img src={p.image || p.img || "https://via.placeholder.com/80"} alt={p.name} />
              <div className="cart-info">
                <h3>{p.name}</h3>
                <div className="cart-bottom">
                  <div className="cart-controls">
                    <button onClick={() => updateQuantity(p.id, -1)}>-</button>
                    <span>{p.quantity}</span>
                    <button onClick={() => updateQuantity(p.id, 1)}>+</button>
                    <button className="remove" onClick={() => removeFromCart(p.id)}>🗑️</button>
                  </div>
                  <p className="cart-price">${p.price}</p>
                </div>
              </div>
            </div>
          ))}

          <h2 className="cart-total">Total: ${total.toFixed(2)}</h2>
          <button className="checkout" onClick={handleCheckout}>
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
