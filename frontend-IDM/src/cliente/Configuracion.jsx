import { useState } from "react";
import "./Configuracion.css";

function Configuracion() {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    contraseña: "",
    ubicacion: "",
    localidad: "",
    CalleyNumero: "",
    pais: "",
    postal: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Por favor, inicia sesión");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: userData.nombre,
          lastName: userData.apellido,
          password: userData.contraseña,
          address: {
            street: userData.CalleyNumero,
            city: userData.localidad,
            state: userData.ubicacion,
            country: userData.pais,
            postal: userData.postal,
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Cambios guardados correctamente");
        console.log("Datos guardados:", data);
      } else {
        alert(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      alert("⚠️ Error al guardar los cambios.");
    }
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
          value={userData.localidad}
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
        <label>Pais</label>
        <input
          type="text"
          name="pais"
          value={userData.postal}
          onChange={handleChange}
          placeholder="Ej: Argentina"
        />
        <label>Código Postal</label>
        <input
          type="text"
          name="postal"
          value={userData.postal}
          onChange={handleChange}
          placeholder="Ej: 12345"
        />
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default Configuracion;
