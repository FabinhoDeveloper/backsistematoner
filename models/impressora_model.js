const sequelize = require("../data_config.js")
const {DataTypes} = require('sequelize')

const Impressora = sequelize.define('IMPRESSORA', {
    idImpressora: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: DataTypes.STRING(45)
    },
    modelo: {
        type: DataTypes.STRING(45)
    },
    monocromatica: {
        type: DataTypes.TINYINT(4)
    }
}, {
    tableName: 'IMPRESSORA', // nome da tabela existente no banco de dados
    timestamps: false // se não há colunas de timestamps (createdAt, updatedAt)
})

Impressora.sync({ force: false })
    .then(() => {
        console.log('Modelo sincronizado com a tabela existente no banco de dados.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o modelo:', err);
});

module.exports = Impressora