const router = require('express').Router();
const userRouter = require('./user')

const imagesRouter = require('./images')

router.get('/', (req, res)=>{
    res.send('hello')
})
router.use('/images', imagesRouter)

router.use('/user', userRouter)


module.exports = router