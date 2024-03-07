const { DataTypes } = require('sequelize');
const sequelize = require('../data_config.js');
const Usuario = require('./usuario_model.js'); // Importe o modelo do Usuario
const Impressora = require('./impressora_model.js')

const Requisicao = sequelize.define('Requisicao', {
    idRequisicao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_requisicao: {
        type: DataTypes.STRING(10),
    },
    resposta: {
        type: DataTypes.TINYINT(4)
    },
    descricao: {
        type: DataTypes.STRING(255)
    },
    // Adicione a chave estrangeira para o Usuario
    idUsuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'idUsuario' // Nome do campo na tabela Usuario que é a chave primária
        }
    },
    idImpressora: {
        type: DataTypes.INTEGER,
        references: {
            model: Impressora,
            key: 'idImpressora' // Nome do campo na tabela Usuario que é a chave primária
        }
    }
}, {
    tableName: 'Requisicao', // nome da tabela existente no banco de dados
    timestamps: false // se não há colunas de timestamps (createdAt, updatedAt)
});

// Sincronize o modelo Requisicao com a tabela existente no banco de dados.
Requisicao.sync({ force: false })
    .then(() => {
        console.log('Modelo sincronizado com a tabela existente no banco de dados.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o modelo:', err);
    });

module.exports = Requisicao;
