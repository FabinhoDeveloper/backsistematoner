const admin_model = require('../models/admin_model.js')

const get_admin = async(req, res) => {
    try {
        const admin_list = await admin_model.findAll()
        res.json(admin_list)
    } catch(err) {

    }
}



module.exports = {get_admin}