import { useState } from "react";
import "./Registro.css";

function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contraseña: "",
    repetirContraseña: "",
  });

  const [mensaje, setMensaje] = useState("");

  const manejarCambio = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function manejarEnvio(e) {
    e.preventDefault();
    const { nombre, email, contraseña, repetirContraseña } = formData;

    if (contraseña !== repetirContraseña) {
      setMensaje("❌ Las contraseñas no coinciden");
      return;
    }

    try {
      const respuesta = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nombre, 
          email,
          password: contraseña, 
        }),
      });

      const data = await respuesta.json();

      if (respuesta.ok) {
        setMensaje("✅ Registro exitoso. ¡Bienvenido/a!");
         window.location.href = "/Sesion"; 

      } else {
        setMensaje(`⚠️ ${data.message || "Error en el registro"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMensaje("⚠️ Error al conectar con el servidor");
    }
  }

  return (
    <div className="register-container">
      <h2>Registro</h2>

      <form onSubmit={manejarEnvio}>
        <div className="input-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={manejarCambio}
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={manejarCambio}
            placeholder="ejemplo@correo.com"
            required
          />
        </div>

        <div className="input-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={manejarCambio}
            placeholder="Crea una contraseña"
            required
          />
        </div>

        <div className="input-group">
          <label>Repetir contraseña</label>
          <input
            type="password"
            name="repetirContraseña"
            value={formData.repetirContraseña}
            onChange={manejarCambio}
            placeholder="Repite la contraseña"
            required
          />
        </div>

        <button type="submit" className="btn-register">
          Registrarse
        </button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
}

export default Registro;
