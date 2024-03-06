const express = require('express')
const router = express.Router()

const usuario_controllers = require("../controllers/usuario_controllers.js")

router.get('/get-usuario', usuario_controllers.get_usuario)


module.exports = router