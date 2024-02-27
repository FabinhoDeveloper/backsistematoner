const cilindro_model = require('../models/cilindro_model.js')

const get_cilindro = async (req, res) => {
    try {
        const cilindro_list = await cilindro_model.findAll();
        res.status(200).send(cilindro_list);
    } catch (error) {
        console.error('Erro ao obter cilindro:', error);
        res.status(500).json({ error: 'Erro ao buscar cilindros' });
    }
}

const cadastrar_cilindro = async (req, res) => {
   const {modelo, estoque} = req.body

   if (!modelo) {
    return res.status(400).json({message: 'O modelo é obrigatório'})
}

    if (!estoque) {
        return res.status(400).json({message: 'O valor de estoque é obrigatório'})
    }

   try {
        const novoCilindro = await cilindro_model.create({
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
    
   }
};

module.exports = {get_cilindro, cadastrar_cilindro}