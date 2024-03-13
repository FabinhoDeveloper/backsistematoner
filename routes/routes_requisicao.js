const express = require("express")
const requisicao_controllers = require('../controllers/requisicao_controllers.js')
const router = express.Router()


router.get('/get-requisicao', requisicao_controllers.get_requisicao)

router.get('/get-requisicao/:id', requisicao_controllers.get_requisicao)

router.get('/get-requisicao-by-usuario/:id', requisicao_controllers.get_requisicao_by_usuario)

router.post('/cadastro-requisicao', requisicao_controllers.cadastrarRequisicao)

module.exports = router