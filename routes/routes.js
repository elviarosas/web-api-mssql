const express = require("express");
const router = express.Router();

router.use("/temas", require("./temas.js"));

module.exports = router;
