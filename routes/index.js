const router = require('express').Router()
const imagesRouter = require('./images')

router.get('/', (req, res)=>{
    res.send('hello')
})
router.use('/images', imagesRouter)

module.exports = router