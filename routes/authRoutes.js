const express = require('express')
const router = express.Router()

const authControllers = require('../controller/authControllers')
router.get('/register',authControllers.showRegister)
router.get('/login',authControllers.showLogin)
router.post('/register',authControllers.Register)
router.post('/login',authControllers.Login)

module.exports = router