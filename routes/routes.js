const express = require("express");
const router = express.Router();

router.use("/temas", require("./temas.js"));
router.use("/users", require("./users.js"));

module.exports = router;
