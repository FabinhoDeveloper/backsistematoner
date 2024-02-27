const express = require('express')
const routes_usuario = require('./routes/routes_usuario.js')
const routes_admin = require('./routes/routes_admin.js')
const routes_impressora = require('./routes/routes_impressora.js')
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

app.listen(PORT, () => {
    console.log(`Servidor da API rodando na porta ${PORT}`)
})