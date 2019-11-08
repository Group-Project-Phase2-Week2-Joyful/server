const router = require('express').Router()
const ImageController = require('../controllers/image')
const upload = require('../middlewares/upload')

router.post('/upload', upload.single('file'), ImageController.upload)
router.get('/', ImageController.find)

module.exports = router