import bcrypt from 'bcrypt'
import userService from '../../services/user/index.service.js'
import validateHelper from '../../helpers/validate.helper.js'
import schema from '../../schemas/user/create.schema.js'

const main = async (req, res, next) => {
  try {
    //validar esquema
    await validateHelper(schema, req.body)
    //enviar al servicio los datos
    req.body.password = await bcrypt.hash(req.body.password, 5)
    await userService.create(req.body)
    //responder
    res.send('Usuario creado con éxito')
  } catch (error) {
    next(error)
  }
}

export default main
