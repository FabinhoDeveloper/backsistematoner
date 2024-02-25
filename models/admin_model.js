const sequelize = require("../data_config.js")
const {DataTypes} = require('sequelize')

const Administrador = sequelize.define('ADMINISTRADOR', {
    id_administrador: {
        type: DataTypes.NUMBER(11),
        primaryKey: true,
        allowNull: false,
        auto_increment: true
    },
    nome: {
        type: DataTypes.STRING(45)
    },
    senha: {
        type: DataTypes.STRING(45)
    },
}, {
    tableName: 'ADMINISTRADOR', // nome da tabela existente no banco de dados
    timestamps: false // se não há colunas de timestamps (createdAt, updatedAt)
})

Administrador.sync({ force: false })
    .then(() => {
        console.log('Modelo sincronizado com a tabela existente no banco de dados.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o modelo:', err);
    });

module.exports = Administrador