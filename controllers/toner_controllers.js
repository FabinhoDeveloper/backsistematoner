const toner_model = require('../models/toner_model.js')

const get_toner = async (req, res) => {
    try {
        const toner_list = await toner_model.findAll();
        res.status(200).send(toner_list);
    } catch (error) {
        console.error('Erro ao obter toners:', error);
        res.status(500).json({ error: 'Erro ao buscar toners' });
    }
}

const cadastrar_toner = async (req, res) => {
   const {modelo, cor ,estoque} = req.body

   if (!modelo) {
        return res.status(400).json({message: 'O modelo é obrigatório'})
    }

    if (!cor) {
        return res.status(400).json({message: 'A cor é obrigatória'})
    }

    if (!estoque) {
        return res.status(400).json({message: 'O valor de estoque é obrigatório'})
    }

   try {
        const novoToner = await toner_model.create({
            modelo: modelo.toUpperCase(),
            cor,
            estoque
        });

        // Envie uma resposta HTTP de sucesso com o novo registro criado
        res.status(201).json({
            success: true,
            message: 'Toner cadastrado com sucesso',
            data: novoToner
        });
   } catch (error) {
        console.error('Erro ao cadastrar toner:', error);
        res.status(500).json({
            success: false,
            message: 'Erro ao cadastrar toner',
            error: error.message
        });
   }
};

module.exports = {get_toner, cadastrar_toner}