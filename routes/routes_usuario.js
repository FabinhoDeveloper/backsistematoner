const express = require('express')
const router = express.Router()

router.get('/get-usuario', (req, res) => {
    res.json({message: 'Rota de requisição de usuario'})
})

module.exports = router