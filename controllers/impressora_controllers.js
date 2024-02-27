const impressora_model = require('../models/impressora_model.js')

const get_impressora = async (req, res) => {
    try {
        const impressora_list = await impressora_model.findAll();
        res.status(200).send(impressora_list);
    } catch (error) {
        console.error('Erro ao obter impressoras:', error);
        res.status(500).json({ error: 'Erro ao buscar impressoras' });
    }
}

const cadastrar_impressora = async (req, res) => {
    try {
        const { marca, modelo, monocromatica } = req.body;

        if (!marca) {
            return res.status(400).json({message: 'A marca é obrigatória'})
        }
        
        if (!modelo) {
            return res.status(400).json({message: 'O modelo é obrigatório'})
        }

        
        let monocromatica_boolean

        switch (monocromatica) {
            case 'on':
                monocromatica_boolean = 1
                break;
            case undefined:
                monocromatica_boolean = 0
                break
            default:
                monocromatica_boolean = monocromatica
                break;
        }

        // Cria uma nova impressora no banco de dados
        const novaImpressora = await impressora_model.create({
            marca,
            modelo: modelo.toUpperCase(),
            monocromatica: monocromatica_boolean
        });


        // Envie uma resposta HTTP de sucesso com o novo registro criado
        res.status(201).json({
            success: true,
            message: 'Impressora cadastrada com sucesso',
            data: novaImpressora
        });
    } catch (error) {
        // Se houver um erro, envie uma resposta HTTP de erro
        console.error('Erro ao cadastrar impressora:', error);
        res.status(500).json({
            success: false,
            message: 'Erro ao cadastrar impressora',
            error: error.message
        });
    }
};

module.exports = {get_impressora, cadastrar_impressora}