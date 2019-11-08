const Image = require('../models/Image')

module.exports = {
  find: (req, res, next) => {
    Image.find().sort({createdAt: 'desc'})
      .then(images => {
        res.status(200).json(images)
      })
      .catch(next)
  },
  findOne: (req, res, next) => {
    Image.findById(req.params.id)
      .then(image => {
        res.status(200).json(image)
      })
      .catch(next)
  },
  upload: (req, res, next) => {
    const { file } = req.body
    Image.create({ url: file })
      .then(image => {
        res.status(201).json(image)
      })
      .catch(next)
  }
}