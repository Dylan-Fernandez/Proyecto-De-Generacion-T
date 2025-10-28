import { useState } from "react";
import "./Configuracion.css";

function Configuracion() {
  const [userData, setUserData] = useState({
    nombre: "Dylan",
    apellido: "Fernández",
    contraseña: "",
    ubicacion: "",
    Localidad:"",
    CalleyNumero:""
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("✅ Cambios guardados correctamente (simulado)");
    console.log("Datos guardados:", userData);
  };

  return (
    <div className="account-container">
      <h2>Configuración de tu cuenta</h2>
      <form onSubmit={handleSave}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />

        <label>Apellido</label>
        <input
          type="text"
          name="apellido"
          value={userData.apellido}
          onChange={handleChange}
        />

        <label>Nueva contraseña</label>
        <input
          type="password"
          name="contraseña"
          value={userData.contraseña}
          onChange={handleChange}
        />

        <label>Provincia</label>
        <input
          type="text"
          name="ubicacion"
          value={userData.ubicacion}
          onChange={handleChange}
          placeholder="Ej: Buenos Aires, Argentina"
        />
        <label>Localidad</label>
        <input
          type="text"
          name="localidad"
          value={userData.Localidad}
          onChange={handleChange}
          placeholder="Ej: La Matanza"
        />
        <label>Calle y Numero</label>
        <input
          type="text"
          name="CalleyNumero"
          value={userData.CalleyNumero}
          onChange={handleChange}
          placeholder="Ej: Calle Falsa 123"
        />
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default Configuracion;