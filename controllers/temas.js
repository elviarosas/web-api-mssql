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
      return res
        .status(500)
        .json({ message: `Erro al obtener los temas. Err: ${err}` });
    }
  },
  getTema: async (req, res, next) => {
    const id = req.params.id;

    try {
      const pool = await poolPromise;
      const result = await pool.request().query(
        `SELECT * 
                FROM Tema 
                WHERE id = ${id}`,
        function (err, resultset) {
          if (err) {
            console.log(err);
          } else {
            var temas = resultset.recordset;
            return res.status(200).json(temas);
          }
        }
      );
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Erro al obtener el tema. Err: ${err}` });
    }
  },
  addTema: async (req, res, next) => {
    const { title, description, imagen } = req.body;

    console.log(title);
    console.log(description);
    console.log(imagen);

    try {
      const pool = await poolPromise;
      const sql_query = `INSERT INTO Tema(title, description, imagen) 
      VALUES ('${title}', '${description}', '${imagen}')`;
      console.log(sql_query);
      const result = await pool
        .request()
        .query(sql_query, function (err, resultset) {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ message: `Erro al agregar el Tema. Err: ${err}` });
          } else {
            var temas = resultset.recordset;
            return res.status(200).json(temas);
          }
        });
    } catch (err) {
      return res.json({ message: `Erro al obtener el tema. Err: ${err}` });
    }
  },
  updateTema: async (req, res, next) => {
    const id = req.params.id;
    const { title, description, imagen } = req.body;

    try {
      const pool = await poolPromise;
      const result = await pool.request().query(
        `UPDATE Tema
        SET title = '${title}',
        description = '${description}',
        imagen = '${imagen}'
        WHERE id = ${id}`,
        function (err, resultset) {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ message: `Error al modificar el Tema. Err: ${err}` });
          } else {
            var temas = resultset.recordset;
            return res.status(200).json(temas);
          }
        }
      );
    } catch (err) {
      return res.json({ message: `Erro al obtener el tema. Err: ${err}` });
    }
  },
  deleteTema: async (req, res, next) => {
    const id = req.params.id;

    try {
      const pool = await poolPromise;
      const result = await pool.request().query(
        `DELETE Tema
        WHERE id = ${id}`,
        function (err, resultset) {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ message: `Error al borrar el Tema. Err: ${err}` });
          } else {
            var temas = resultset.recordset;
            return res.status(200).json(temas);
          }
        }
      );
    } catch (err) {
      return res.json({ message: `Erro al borrar el tema. Err: ${err}` });
    }
  },
};
