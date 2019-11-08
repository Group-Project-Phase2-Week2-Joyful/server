const Image = require('../models/Image')

module.exports = {
  find: (req, res, next) => {
    Image.find()
      .then(images => {
        res.status(200).json(images)
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