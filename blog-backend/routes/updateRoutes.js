const express = require('express')
const router = express.Router();
const update = require('../controllers/updateController')
const authenticate = require('../middlewares/authenticates')

router.post('/image',authenticate,update.updateImage);
router.post('/post',authenticate,update.updatePost);


module.exports = router;