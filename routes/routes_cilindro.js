const express = require("express")
const router = express.Router()
const cilindro_controllers = require("../controllers/cilindro_controllers.js")

router.get('/get-cilindro', cilindro_controllers.get_cilindro)

router.post('/cadastro-cilindro', cilindro_controllers.cadastrar_cilindro)

module.exports = router