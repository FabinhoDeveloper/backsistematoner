const sequelize = require("../data_config.js")
const {DataTypes} = require('sequelize')

const Cilindro = sequelize.define('CILINDRO', {
    idCilindro: {
        type: DataTypes.NUMBER(11),
        primaryKey: true,
        auto_increment: true
    },
    modelo: {
        type: DataTypes.STRING(45)
    },
    estoque: {
        type: DataTypes.NUMBER(11)
    },
}, {
    tableName: 'CILINDRO', // nome da tabela existente no banco de dados
    timestamps: false // se não há colunas de timestamps (createdAt, updatedAt)
})

Cilindro.sync({ force: false })
    .then(() => {
        console.log('Modelo sincronizado com a tabela existente no banco de dados.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o modelo:', err);
    });

module.exports = Cilindro