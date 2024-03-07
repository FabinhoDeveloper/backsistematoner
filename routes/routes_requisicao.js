const express = require("express")
const requisicao_controllers = require('../controllers/requisicao_controllers.js')
const router = express.Router()


router.get('/get-requisicao', requisicao_controllers.get_requisicao)

router.get('/get-requisicao/:id', requisicao_controllers.get_requisicao)

module.exports = router