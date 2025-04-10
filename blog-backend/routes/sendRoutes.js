const express = require('express')
const router = express.Router();
const send = require('../controllers/sendController')
const authenticate = require('../middlewares/authenticates')

router.get('/post', send.sendPosts)
router.get('/personal', authenticate, send.sendPersonalPosts)

module.exports = router