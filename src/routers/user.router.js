import express from 'express'
import { create, login } from '../controllers/user/index.controller.js'

const router = express.Router()

router.post('/create', create)
router.post('/login', login)

export default router
