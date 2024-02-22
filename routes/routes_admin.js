const express = require('express')
const router = express.Router()

router.get('/get-admin', (req, res) => {
    res.json({message: 'Rota de requisição de admin'})
})

module.exports = router