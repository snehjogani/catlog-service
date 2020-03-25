import mongoose from 'mongoose'

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env

const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=${MONGO_DB}`
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose
  .connect(uri, options)
  .then(function () {
    console.log('MongoDB is connected')
  })
  .catch(function (err) {
    console.log(err)
  })
