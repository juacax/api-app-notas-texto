import joi from 'joi'

const createSchema = joi.object({
  noteId: joi.number().required()
})

export default createSchema
