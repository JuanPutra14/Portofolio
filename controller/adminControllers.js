const db = require('../config/db')

exports.showDashboard = (req,res)=>{
    const sql = 'SELECT * FROM message'

        let page = parseInt(req.query.page)|| 1
        let limit = 5
        let offset = (page-1) * limit
        let countQuery = 'SELECT COUNT(*) as total from message'
        let dataQuerry = 'SELECT * FROM message limit ? offset ?'

        db.query(countQuery,(err,countResult)=>{
            let totalitems = countResult[0].total
            let totalpages = Math.ceil(totalitems / limit)
            db.query(dataQuerry,[limit,offset],(err,result)=>{
                if(err) throw err
                return res.render('admin_dashboard',{data : result,totalPages:totalpages,currentPage : page})
            })
        })
      
}
exports.searchMessage = (req,res)=>{
    const {query} = req.query
    const sql = "SELECT * FROM message WHERE nama LIKE ?"
    db.query(sql,[`%${query}%`],(err,result)=>{
        if (err) throw err
        console.log(result)
        
        return res.render('admin_dashboard',{data : result,totalPages:1,currentPage : 1})
    })
}