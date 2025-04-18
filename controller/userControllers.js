const db = require('../config/db')

exports.showDashboard = (req,res)=>{
   return res.render('user_dashboard')
}
exports.sendMessage = (req,res)=>{
   const {nama,email,message} = req.body
   const sql = 'INSERT INTO message (nama,email,message) VALUES (?,?,?)'
   db.query(sql,[nama,email,message],(err,result)=>{
      if (err) throw err
      console.log(result)
      return res.redirect('/user/dashboard')
      
   })
}