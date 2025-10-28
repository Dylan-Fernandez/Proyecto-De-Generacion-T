import { useState } from "react";
import "./Sesion.css";
import { Link } from "react-router-dom";
import "./Registro.jsx";


function Sesion() {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [email, setEmail] = useState("");
  const [errores, setErrores] = useState({});


  function manejarEnvio(e) {
    e.preventDefault();
    if (nombre === "admin" && contraseña === "1234" && email === "elpepe_2014@hotmail.com") {
      setMensaje("✅ Inicio de sesión exitoso");
    } else {
      setMensaje("❌ Nombre o contraseña incorrectos");
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
          {errores.contraseña && <span className='text-danger'>{errores.contraseña}</span>}
        </div>


        <button type="submit" className="btn-login">
          Iniciar sesión
        </button>

      </form>
    <Link to="/Registro">
        <button className="btn-create-account" placeholder="Crear cuenta"> 
                Crear cuenta
        </button>
    </Link>
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default Sesion;
