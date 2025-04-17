const db = require('../config/db')

exports.showDashboard = (req,res)=>{
    res.render('admin_dashboard')
}