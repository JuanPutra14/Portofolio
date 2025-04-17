const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000
const bodyparser =  require('body-parser')
const authRoutes = require('./routes/authRoutes')
const adminRoutes = require('./routes/adminRoutes')
const userRoutes = require('./routes/userRoutes')
app.use(session({
    secret : 'secretkey',
    resave : false,
    saveUninitialized : true
}))
app.set('view engine','ejs')
app.use(express.urlencoded({extended : true}))
app.use(bodyparser.urlencoded({extended : true}))

app.use('/',authRoutes)
app.use('/user',userRoutes)
app.use('/admin',adminRoutes)

app.listen(port, () =>{
console.log(`APP RUN IN PORT ${port}`)
})
