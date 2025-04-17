const db = require('../config/db')

exports.showDashboard = (req,res)=>{
   return res.render('user_dashboard')
}
