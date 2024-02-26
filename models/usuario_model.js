const sequelize = require("../data_config.js")
const {DataTypes} = require('sequelize')


const Usuario = sequelize.define('USUARIO', {
    idUsuario: {
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
    setor: {
        type: DataTypes.STRING(45)
    },
    secretaria: {
        type: DataTypes.STRING(45)
    }
}, {
    tableName: 'USUARIO', // nome da tabela existente no banco de dados
    timestamps: false // se não há colunas de timestamps (createdAt, updatedAt)
})

Usuario.sync({ force: false })
    .then(() => {
        console.log('Modelo sincronizado com a tabela existente no banco de dados.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o modelo:', err);
    });

module.exports = Usuario