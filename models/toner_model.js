const sequelize = require("../data_config.js")
const {DataTypes} = require('sequelize')

const Toner = sequelize.define('TONER', {
    idToner: {
        type: DataTypes.NUMBER(11),
        primaryKey: true,
        allowNull: false,
        auto_increment: true
    },
    modelo: {
        type: DataTypes.STRING(45)
    },
    cor: {
        type: DataTypes.STRING(45)
    },
    estoque: {
        type: DataTypes.NUMBER(11)
    },
}, {
    tableName: 'TONER', // nome da tabela existente no banco de dados
    timestamps: false // se não há colunas de timestamps (createdAt, updatedAt)
})

Toner.sync({ force: false })
    .then(() => {
        console.log('Modelo sincronizado com a tabela existente no banco de dados.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o modelo:', err);
    });

module.exports = Toner