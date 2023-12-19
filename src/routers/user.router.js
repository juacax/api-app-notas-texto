import express from 'express'

const router = express.Router()

router.post('/create', (req, res) => {
  res.send('Ruta de Creación de usuarios')
})

export default router
