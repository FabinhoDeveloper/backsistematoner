const express = require('express')
const router = express.Router()

const admin_controllers = require('../controllers/admin_controllers.js')

router.get('/get-admin', admin_controllers.get_admin)


module.exports = router