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
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  const addToCart = (item) => {
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
  };
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };
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
