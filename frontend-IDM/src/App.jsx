import Registro from './cliente/Registro'
import './App.css';
import Navbar from './componetes/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Downloads from './pages/Downloads';
import History from './pages/History';
import Photos from './pages/Photos';
import Footer from './componetes/Footer';
import Sesion from './cliente/sesion';
import Cart from './carrito/cart';
import { useState, useEffect } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  // 🔹 Al iniciar, cargar carrito local o remoto
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Cargar carrito desde el backend
      fetch('http://localhost:4000/api/cart', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.items) {
            setCart(
              data.items.map((item) => ({
                id: item.product.id,
                name: item.product.name,
                price: item.product.price,
                imageUrl: item.product.imageUrl,
                quantity: item.quantity,
              }))
            );
          }
        })
        .catch((err) => console.error("Error al cargar carrito:", err));
    } else {
      // Si no hay sesión, usar localStorage
      const savedCart = localStorage.getItem('cart');
      if (savedCart) setCart(JSON.parse(savedCart));
    }
  }, []);

  // 🔹 Guardar carrito local si no hay sesión
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // 🟢 Agregar producto
  const addToCart = async (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });

    // Si hay sesión, actualizar en backend
    const token = localStorage.getItem('token');
    if (token) {
      await fetch('http://localhost:4000/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: item.id, quantity: 1 }),
      });
    }
  };

  // 🔴 Eliminar producto
  const removeFromCart = async (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));

    const token = localStorage.getItem('token');
    if (token) {
      await fetch('http://localhost:4000/api/cart/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: id }),
      });
    }
  };

  // 🟣 Actualizar cantidad
  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p
      )
    );
  };

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product addToCart={addToCart} />} />
        <Route path="/Downloads" element={<Downloads />} />
        <Route path="/History" element={<History />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Sesion" element={<Sesion />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Cart" element={<Cart cart={cart}removeFromCart={removeFromCart}updateQuantity={updateQuantity}/>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
