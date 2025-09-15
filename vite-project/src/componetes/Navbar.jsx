import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchText, setSearchText] = useState("");

    const imagenURL = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";

    return (
        <>
            {/* TÍTULO */}
            <div className="title">
                <img src={imagenURL} alt="Logo izquierda" />
                <div className="logo">
                    <h1>I.D.M</h1>
                    <h2>inclucion a la dificultan motriz</h2>
                </div>
                <img src={imagenURL} alt="Logo derecha" />
            </div>

            {/* NAVBAR */}
            <header className="navbar">

                {/* Enlace PC */}
                <nav className="navbar__links pc-only">
                    <Link to="/">Home</Link>
                    <Link to="/Contacts">Contactos</Link>
                    <Link to="/Downloads">Descargas</Link>
                    <Link to="/History">Historia</Link>
                    <Link to="/Photos">Fotos</Link>
                </nav>

                {/* ICONOS PC */}
                <div className="navbar__icons pc-only">
                    <button>👤</button>
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
                    <button>🛒</button>
                </div>

                {/* ICONOS MÓVIL */}
                <div className="mobile-icons mobile-only">
                    <div className="row">
                        <img src={imagenURL} alt="Logo derecha" />
                        <div >
                            <button>👤</button>
                            <button>🌐</button>
                            <button>🛒</button>
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

                {/* MENÚ DESPLEGABLE MÓVIL */}
                {menuOpen && (
                    <div className="mobile-menu mobile-only">
                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/Contacts" onClick={() => setMenuOpen(false)}>Contactos</Link>
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
