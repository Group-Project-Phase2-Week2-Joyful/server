const mongoose = require('mongoose')
const { Schema } = mongoose

const imageSchema = new Schema({
  url: {
    type: String
  }
}, {
  versionKey: false
})

module.exports = mongoose.model('Image', imageSchema)