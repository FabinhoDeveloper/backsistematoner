const usuario_model = require('../models/usuario_model.js')

const get_usuario = async(req, res) => {
    try {
        const usuarios = await usuario_model.findAll();
        res.status(200).send(usuarios);
    } catch (error) {
        console.error('Erro ao obter usuarios:', error);
        res.status(500).json({ error: 'Erro ao buscar usuarios' });
    }
}

module.exports = {get_usuario}