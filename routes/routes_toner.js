const express = require("express")
const router = express.Router()
const toner_controllers = require("../controllers/toner_controllers.js")

router.get('/get-toner', toner_controllers.get_toner)

router.post('/cadastro-toner', toner_controllers.cadastrar_toner)

module.exports = router