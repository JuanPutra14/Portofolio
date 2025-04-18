const express = require('express')
const router = express.Router()
const adminControllers = require('../controller/adminControllers')
router.get('/dashboard',adminControllers.showDashboard)
router.get('/search/dashboard',adminControllers.searchMessage)
module.exports = router
