import express from 'express'
import userRouter from './user.router.js'
import noteRouter from './note.router.js'

const router = express.Router()

router.use('/api/user', userRouter)
router.use('/api/note', noteRouter)

export default router
