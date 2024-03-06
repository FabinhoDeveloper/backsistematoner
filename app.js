const express = require('express')

const routes_usuario = require('./routes/routes_usuario.js')
const routes_admin = require('./routes/routes_admin.js')
const routes_impressora = require('./routes/routes_impressora.js')
const routes_toner = require('./routes/routes_toner.js')
const router_cilindro = require('./routes/routes_cilindro.js')
const router_requisicao = require('./routes/routes_requisicao.js')

const cors = require('cors')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT 

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/usuario', routes_usuario)
app.use('/admin', routes_admin)
app.use('/impressora', routes_impressora)
app.use('/toner', routes_toner)
app.use('/cilindro', router_cilindro)
app.use('/requisicao', router_requisicao)

app.listen(PORT, () => {
    console.log(`Servidor da API rodando na porta ${PORT}`)
})