const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/temas.js");

router.get("/", UserControllers.getAllTemas);
router.get("/:id", UserControllers.getTema);
router.post("/add", UserControllers.addTema);
router.put("/update/:id", UserControllers.updateTema);
router.delete("/delete/:id", UserControllers.deleteTema);

router.get("/:estatus", UserControllers.getTema);
module.exports = router;
