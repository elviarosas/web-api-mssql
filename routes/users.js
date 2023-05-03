const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/users.js");

router.post("/login", UserControllers.login);

module.exports = router;
