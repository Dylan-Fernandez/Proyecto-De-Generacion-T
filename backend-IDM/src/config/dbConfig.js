module.exports = {
  server: "DEYMAR\\MSSQLSERVER01", // 👈 Tu nombre de servidor
  port: 1433,                      // Puerto estándar de SQL Server
  database: "IDM",                 // 👈 Nombre de tu base de datos
  user: "idm",               // 👈 Usuario SQL que creaste
  password: "idm2022", // 👈 Contraseña del usuario SQL
  options: {
    encrypt: false,                // false si estás en localhost
    trustServerCertificate: true,  // necesario para evitar errores SSL
    enableArithAbort: true,        // mejora estabilidad
    connectionTimeout: 30000,      // 30 segundos
    requestTimeout: 30000,
  },
};
