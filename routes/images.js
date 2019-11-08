const router = require('express').Router()
const ImageController = require('../controllers/image')
const upload = require('../middlewares/upload')

router.post('/upload', upload.single('file'), ImageController.upload)
router.get('/', ImageController.find)
router.get('/:id', ImageController.findOne)

module.exports = router