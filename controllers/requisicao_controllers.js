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

const get_requisicao_by_usuario = async (req, res) => {
    const id_usuario = req.params.id
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

const cadastrarRequisicao = async (req, res) => {
    const {modelo, tipo, cor, descricao} = req.body
    const date = new Date()
    const dataDeHoje = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    
    const session_fetch = await fetch('http://localhost:3000/session-data')

    console.log(session_fetch)

    try {
        const req_Criada = await requisicao_model.create({
            data_requisicao: dataDeHoje,
            resposta: 0,
            descricao,
            idUsuario,
            idImpressora: modelo,
            tipo,
            cor
        })
        res.status(201).json({
            success: true,
            message: 'Requisicao cadastrada com sucesso',
            data: req_Criada
        });
    } catch (error) {
        console.error('Erro ao cadastrar requisição:', error);
        res.status(500).json({ error: 'Erro ao cadastrar requisicoes' });
    }
}

module.exports = {get_requisicao, get_requisicao_by_usuario, cadastrarRequisicao}