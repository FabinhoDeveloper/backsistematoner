const requisicao_model = require("../models/requisicao_model.js")

const get_requisicao = async(req, res) => {
    const {id} = req.params

    if (id) {
        try {
            const requisicao = await requisicao_model.findOne({
                where: {
                    idRequisicao: id
                }
            });
            res.status(200).send(requisicao);
        } catch (error) {
            console.error('Erro ao obter requisicao:', error);
            res.status(500).json({ error: 'Erro ao buscar requisicoes' });
        }
    } else {
        try {
            const requisicao = await requisicao_model.findAll();
            res.status(200).send(requisicao);
        } catch (error) {
            console.error('Erro ao obter requisicoes:', error);
            res.status(500).json({ error: 'Erro ao buscar requisicoes' });
        }
    }
}

const get_requisicao_by_id = async (req, res) => {
    const id_usuario = req.body.id
    try {
        // Aqui você usaria o idUsuario para filtrar as requisições do usuário
        const requisicao_list = await requisicao_model.findAll({
            where: {
                idUsuario: id_usuario
            }
        });
        res.status(200).send(requisicao_list);
    } catch (error) {
        console.error('Erro ao obter requisicoes:', error);
        res.status(500).json({ error: 'Erro ao buscar requisicoes' });
    }
};


module.exports = {get_requisicao}