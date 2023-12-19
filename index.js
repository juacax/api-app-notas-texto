import express from 'express'
import dotenv from 'dotenv'
import router from './src/routers/index.router.js'
import errorController from './src/controllers/error/index.controller.js'

dotenv.config()
const { HTTP_PORT } = process.env

const api = express()
api.use(express.json())
api.use(router)
api.use(errorController)

api.listen(HTTP_PORT, () => {
  console.log(`Server running on http://localhost:${HTTP_PORT}`)
})
