import joi from 'joi'

const loginSchema = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required().min(8).max(20)
})

export default loginSchema
