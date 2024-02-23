const admin_model = require('../models/admin_model.js')

const get_admin = async(req, res) => {
    try {
        const admins = await admin_model.findAll();
        res.status(200).json({ admins });
    } catch (error) {
        console.error('Erro ao obter administradores:', error);
        res.status(500).json({ error: 'Erro ao buscar administradores' });
    }
}

module.exports = {get_admin}