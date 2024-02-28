const express = require("express")
const router = express.Router()
const impressora_controllers = require("../controllers/impressora_controllers.js")

router.get('/get-impressora', impressora_controllers.get_impressora)

router.get('/get-impressora-marca/:marca', impressora_controllers.get_impressoras_by_marca)

router.get('/get-impressora-id/:id', impressora_controllers.get_impressoras_by_id)

router.post('/cadastro-impressora', impressora_controllers.cadastrar_impressora)

module.exports = router