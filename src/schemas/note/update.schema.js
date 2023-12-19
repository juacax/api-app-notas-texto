import joi from 'joi'

const createSchema = joi.object({
  titulo: joi.string().required(),
  texto: joi.string().required(),
  categoria: joi.number().required(),
  id: joi.number().required()
})

export default createSchema
