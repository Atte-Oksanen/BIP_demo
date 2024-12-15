const PORT = process.env.PORT || 3001
import express from 'express'
import 'dotenv/config'
import mongoose, { MongooseError } from 'mongoose'
import cors from 'cors'
import { apiRouter } from './routers/apiRouter'
import { mappingRouter } from './routers/mappingRouter'
import { dataRouter } from './routers/dataRouter'
import ipCheck from './middleware/ipCheck'

const runServer = async () => {
  const app = express()

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.info('Connected to mongoDB')
  } catch (error) {
    if (error instanceof MongooseError) {
      console.error(`Error connecting to database ${error.message}`)
    }
  }
  app.set('trust proxy', true)
  app.use(cors())
  app.use(express.json())
  app.use(ipCheck)
  app.get('/', (_, res) => {
    res.json({ message: 'server running' })
  })

  app.use('/apis', apiRouter)
  app.use('/apis/data', dataRouter)
  app.use('/mapping', mappingRouter)

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })
}

runServer()