const mongoose = require('mongoose')
const Schema = mongoose.Schema

const randToken = require('rand-token')

module.exports = mongoose.model('Poll', new Schema({
  question: String,
  secretKey: {
    type: String,
    default: () => (
      randToken.generate(32)
    )
  },
  choices: [{
    label: String,
    votes: {
      type: Number,
      default: 0
    }
  }]
}))
