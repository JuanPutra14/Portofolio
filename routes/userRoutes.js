const express = require('express')
const router = express.Router()

const userControllers = require('../controller/userControllers')
router.get('/dashboard',userControllers.showDashboard)

module.exports = router