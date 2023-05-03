const { poolPromise } = require("../config/db.js");
const sql = require("mssql");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;

      const pool = await poolPromise;
      const result = await pool
        .request()
        .query(
          `SELECT * FROM Usuario WHERE username = '${username}' and password = '${password}'`,
          function (err, resultset) {
            if (err) {
              res
                .status(500)
                .json({ message: `Erro al realizar el login. Err: ${err}` });
            } else {
              if (resultset.recordset.length > 0) {
                const user = resultset.recordset;
                delete user.password;
                console.log(user);
                return res.json(user);
              } else {
                return res
                  .status(401)
                  .json({ error: "Invalid username or password" });
              }
            }
          }
        );
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Error al realizar el login. Err: ${err}` });
    }
  },
};
