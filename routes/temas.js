const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/temas.js");

router.get("/", UserControllers.getAllTemas);
/*router.get('/:id', UserControllers.getUser)
router.post('/add', UserControllers.addUser)
router.put('/update/:id', UserControllers.updateUser)*/
module.exports = router;
