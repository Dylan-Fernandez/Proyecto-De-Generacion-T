import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import idm from "./../assets/idm.png";

const Navbar = ({ cart = [] }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const totalItems = cart.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <>
      <div className="title">
        <img src={idm} alt="Logo izquierda" />
        <div className="logo">
          <h1>I.D.M</h1>
          <h2>inclución a la dificultad motriz</h2>
        </div>
        <img src={idm} alt="Logo derecha" />
      </div>
      <header className="navbar">
        <nav className="navbar__links pc-only">
          <Link to="/">Home</Link>
          <Link to="/Product">Productos</Link>
          <Link to="/Downloads">Descargas</Link>
          <Link to="/History">Historia</Link>
          <Link to="/Photos">Fotos</Link>
        </nav>

        <div className="navbar__icons pc-only">
          <div className="navbar__iconsend">
            <Link to="/Sesion">👤</Link>
            <Link to="/Cart" className="cart-icon">
              🛒
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </Link>
          </div>
          <button>🌐</button>
          <div className="navbar__search-group1">
            {searchOpen && (
              <input
                type="text"
                placeholder="Buscar..."
                className="navbar__search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onBlur={(e) => {
                  setTimeout(() => {
                    if (e.target.value.trim() === "") {
                      setSearchOpen(false);
                    }
                  }, 150);
                }}
                autoFocus
              />
            )}
            <button onClick={() => setSearchOpen(true)}>🔍</button>
          </div>
        </div>

        <div className="mobile-icons mobile-only">
          <div className="row">
            <img src={idm} alt="Logo derecha" />
            <div>
              <Link to="/Sesion">👤</Link>
              <button>🌐</button>
              <Link to="/Cart" className="cart-icon">
                🛒
                {totalItems > 0 && (
                  <span className="cart-count">{totalItems}</span>
                )}
              </Link>
            </div>
          </div>
          <div className="row2">
            <div className="navbar__search-group2">
              {searchOpen && (
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="navbar__search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onBlur={(e) => {
                    setTimeout(() => {
                      if (e.target.value.trim() === "") {
                        setSearchOpen(false);
                      }
                    }, 150);
                  }}
                  autoFocus
                />
              )}
            </div>
            <button onClick={() => setSearchOpen(true)}>🔍</button>
            <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
          <div className="bus">
            {searchOpen && (
              <input
                type="text"
                placeholder="Buscar..."
                className="navbar__search mobile-search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onBlur={(e) => {
                  setTimeout(() => {
                    if (e.target.value.trim() === "") {
                      setSearchOpen(false);
                    }
                  }, 150);
                }}
                autoFocus
              />
            )}
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu mobile-only">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/Product" onClick={() => setMenuOpen(false)}>Productos</Link>
            <Link to="/Downloads" onClick={() => setMenuOpen(false)}>Descargas</Link>
            <Link to="/History" onClick={() => setMenuOpen(false)}>Historia</Link>
            <Link to="/Photos" onClick={() => setMenuOpen(false)}>Fotos</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
