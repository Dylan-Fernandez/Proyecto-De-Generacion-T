const {sql,pool}= require('../db/connection')
async function getProductos(){
    await pool;
    const request = new sql.Request()
    const result = await request.query("select * from Productos")
    return result.recordset;
}
module.exports={getProductos}
