const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Pagina inicial WebApi");
});

//Aqui estan todas las rutas
app.use(require("./routes/routes.js"));

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
