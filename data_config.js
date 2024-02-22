const Sequelize = require('sequelize');
require('dotenv').config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DATABASE = process.env.DATABASE
const HOST = process.env.HOST

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