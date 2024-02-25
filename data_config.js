const Sequelize = require('sequelize');
require('dotenv').config()

const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || 'Cjte2023'
const DATABASE = process.env.DATABASE || 'sistema_toner'
const HOST = process.env.HOST || 'localhost'

const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
    dialect: 'mysql',
    host: HOST
})

sequelize.authenticate().then(() => {
    console.log('Conexao realizada com sucesso')
}).catch(err => {
    console.log(err)
})

module.exports = sequelize