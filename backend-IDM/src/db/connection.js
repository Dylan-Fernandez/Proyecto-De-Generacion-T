// Importar la librería mssql
const sql = require("mssql");
const dbconfing= require("../config/dbConfig")
let pool;
// Función asíncrona para conectar a SQL Server
async function conectar() {
  try {
    console.log("🟣 Intentando conectar a SQL Server...");
    console.log("⚙️ Configuración:", {
      server: dbconfing.server,
      database: dbconfing.database,
      port: dbconfing.port
    });

    // Crear la conexión
    pool = await sql.connect(dbconfing);
    console.log("✅ Conectado a SQL Server exitosamente");
    console.log("📘 Pool de conexiones creado");

    // Probar la conexión con una query simple
    const result = await pool.request().query("SELECT 1 AS test");
    console.log("🧪 Query de prueba exitosa:", result.recordset);

    // Cerrar conexión
    // await pool.close();
    // console.log("🔒 Conexión cerrada correctamente");

  } catch (err) {
    console.error("❌ Error de conexión:");
    console.error("📄 Detalles del error:", err.message);
    console.error("💡 Código de error:", err.code);
    console.error("🧱 Stack completo:", err.stack);
  }
}

// Ejecutar la conexión
conectar();
module.exports={
 sql,conectar,    

}