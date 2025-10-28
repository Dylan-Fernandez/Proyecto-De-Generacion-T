import { useState } from "react";
import "./Registro.css";
function Registro() {
   const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    usuario: "",
    contraseña: "",
    repetirContraseña: "",
  });

  const [mensaje, setMensaje] = useState("");

  const manejarCambio = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const { nombre, apellido, email, usuario, contraseña, repetirContraseña } = formData;

    if (!nombre || !apellido || !email || !usuario || !contraseña || !repetirContraseña) {
      setMensaje("⚠️ Por favor completa todos los campos");
      return;
    }

    if (contraseña !== repetirContraseña) {
      setMensaje("❌ Las contraseñas no coinciden");
      return;
    }

    // Acá iría la lógica para guardar los datos (por ahora solo simula)
    setMensaje("✅ Registro exitoso. ¡Bienvenido/a!");
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      usuario: "",
      contraseña: "",
      repetirContraseña: "",
    });
  };

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
          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={manejarCambio}
            placeholder="Tu apellido"
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
          <label>Nombre de usuario</label>
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={manejarCambio}
            placeholder="Elige un usuario"
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