const express = require("express")
const router = express.Router()
const impressora_controllers = require("../controllers/impressora_controllers.js")

router.get('/get-impressora', impressora_controllers.get_impressora)

router.post('/cadastro-impressora', impressora_controllers.cadastrar_impressora)

module.exports = router