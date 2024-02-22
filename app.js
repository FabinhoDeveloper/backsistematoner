const express = require('express')
const routes_usuario = require('./routes/routes_usuario.js')
const routes_admin = require('./routes/routes_admin.js')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/usuario', routes_usuario)
app.use('/admin', routes_admin)

app.listen(PORT, () => {
    console.log(`Servidor da API rodando na porta ${PORT}`)
})