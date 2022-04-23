import mongoose from 'mongoose'
// import log from './logger.js'

export default function connectDb() {
  const url = "mongodb://localhost:27017/fav-api"

  mongoose.connect(url, {
    useNewUrlParser: true
  })

  mongoose.connection.on('error', (error) => {
    log.error(error)
  })
}
