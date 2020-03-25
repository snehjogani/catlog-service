import mongoose, { Schema } from 'mongoose'

const bookSchema = new Schema({
  _id: Schema.ObjectId,
  title: String,
  author: String,
})

module.exports = mongoose.model('Books', bookSchema)
