const express = require('express')
const router = express.Router()
const { task, taskDetails} = require('../controllers/tasks')

router.get('/task', task)
router.get('/taskDetails', taskDetails)

module.exports = router