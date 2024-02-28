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
            modelo: modelo.toUpperCase(),
            estoque: estoque
        });

        // Envie uma resposta HTTP de sucesso com o novo registro criado
        res.status(201).json({
            success: true,
            message: 'Cilindro cadastrado com sucesso',
            data: novoCilindro
        });
   } catch (error) {
        console.error('Erro ao cadastrar cilindro:', error);
        res.status(500).json({
            success: false,
            message: 'Erro ao cadastrar cilindro',
            error: error.message
        });
   }
};

module.exports = {get_cilindro, cadastrar_cilindro}