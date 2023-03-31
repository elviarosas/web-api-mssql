const { poolPromise } = require("../config/db.js");
const sql = require("mssql");

module.exports = {
  getAllTemas: async (req, res, next) => {
    try {
      const pool = await poolPromise;
      const result = await pool
        .request()
        .query("SELECT * FROM Tema", function (err, resultset) {
          if (err) {
            console.log(err);
          } else {
            var temas = resultset.recordset;
            return res.json(temas);
          }
        });
    } catch (err) {
      return res.json({ message: `Erro al obtener los temas. Err: ${err}` });
    }
  },
};
