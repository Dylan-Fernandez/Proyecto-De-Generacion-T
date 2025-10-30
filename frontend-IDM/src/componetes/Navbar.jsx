import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../cliente/AuthContext"; // ✅ Importa tu contexto
import "./Navbar.css";
import idm from "./../assets/idm.png";

const Navbar = ({ cart = [] }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, logout } = useAuth(); // ✅ Usa el contexto
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, p) => sum + p.quantity, 0);

  const handleLogout = () => {
    logout(); // Llama al método del contexto
    setDropdownOpen(false);
    navigate("/Sesion");
  };

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
        {/* --- LINKS PRINCIPALES (PC) --- */}
        <nav className="navbar__links pc-only">
          <Link to="/">Inicio</Link>
          <Link to="/Product">Productos</Link>
          <Link to="/Downloads">Descargas</Link>
          <Link to="/History">Historia</Link>
          <Link to="/Photos">Fotos</Link>
        </nav>

        {/* --- ICONOS SUPERIORES (PC) --- */}
        <div className="navbar__icons pc-only">
          {/* 🔍 Búsqueda */}
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
                    if (e.target.value.trim() === "") setSearchOpen(false);
                  }, 150);
                }}
                autoFocus
              />
            )}
            <button onClick={() => setSearchOpen(true)}>🔍</button>
          </div>

          {/* 👤 Usuario + 🛒 Carrito */}
          <div className="navbar__iconsend">
            {!user ? (
              // Si NO hay sesión
              <Link to="/Sesion">👤</Link>
            ) : (
              // Si hay sesión → menú desplegable
              <div className="user-menu-container">
                <button
                  className="user-icon"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  👤
                </button>

                {dropdownOpen && (
                  <div className="user-dropdown">
                    <button
                      onClick={() => {
                        navigate("/Configuracion");
                        setDropdownOpen(false);
                      }}
                    >
                      ⚙️ Configuración
                    </button>
                    <button onClick={handleLogout}>🚪 Cerrar sesión</button>
                  </div>
                )}
              </div>
            )}

            <Link to="/Cart" className="cart-icon">
              🛒
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </Link>
          </div>
        </div>

        {/* --- MODO MÓVIL --- */}
        <div className="mobile-icons mobile-only">
          <div className="row">
            <img src={idm} alt="Logo derecha" />
            <div>
              {!user ? (
                <Link to="/Sesion">👤</Link>
              ) : (
                <div className="user-menu-container">
                  <button
                    className="user-icon"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    👤
                  </button>

                  {dropdownOpen && (
                    <div className="user-dropdown">
                      <button
                        onClick={() => {
                          navigate("/Configuracion");
                          setDropdownOpen(false);
                        }}
                      >
                        ⚙️ Configuración
                      </button>
                      <button onClick={handleLogout}>🚪 Cerrar sesión</button>
                    </div>
                  )}
                </div>
              )}

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
                      if (e.target.value.trim() === "") setSearchOpen(false);
                    }, 150);
                  }}
                  autoFocus
                />
              )}
            </div>
            <button onClick={() => setSearchOpen(true)}>🔍</button>
            <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
        </div>

        {/* --- MENÚ MÓVIL DESPLEGABLE --- */}
        {menuOpen && (
          <div className="mobile-menu mobile-only">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
            <Link to="/Product" onClick={() => setMenuOpen(false)}>
              Productos
            </Link>
            <Link to="/Downloads" onClick={() => setMenuOpen(false)}>
              Descargas
            </Link>
            <Link to="/History" onClick={() => setMenuOpen(false)}>
              Historia
            </Link>
            <Link to="/Photos" onClick={() => setMenuOpen(false)}>
              Fotos
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
