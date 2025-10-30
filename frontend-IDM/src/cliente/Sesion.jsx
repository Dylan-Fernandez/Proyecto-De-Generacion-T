import { useState, useContext } from "react";
import { useAuth } from "../cliente/AuthContext";
import "./Sesion.css";
import { Link } from "react-router-dom";

function Sesion() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");
  const { login } = useAuth();

  async function manejarEnvio(e) {
    e.preventDefault();

    try {
      const respuesta = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: contraseña }),
      });

      const data = await respuesta.json();

      if (respuesta.ok) {
        setMensaje("✅ Inicio de sesión exitoso");
        login(data.user, data.token); // 👈 guardamos la sesión globalmente
        window.location.href = "/"; // redirige al home
      } else {
        setMensaje(`❌ ${data.message || "Error al iniciar sesión"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMensaje("⚠️ Error al conectar con el servidor");
    }
  }

  return (
    <div className="login-container">
      <h2>Inicio de Sesión</h2>
      <form onSubmit={manejarEnvio}>
        <div className="input-group">
          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu email"
            required
          />
        </div>

        <div className="input-group">
          <label>Contraseña</label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        <button type="submit" className="btn-login">
          Iniciar sesión
        </button>
      </form>

      <Link to="/Registro">
        <button className="btn-create-account">Crear cuenta</button>
      </Link>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default Sesion;
