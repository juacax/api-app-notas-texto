import express from 'express'
import {
  getOwnList,
  getOneById,
  create
} from '../controllers/note/index.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/list', authMiddleware, getOwnList)
router.get('/:noteId', authMiddleware, getOneById)
router.post('/create', authMiddleware, create)

export default router
