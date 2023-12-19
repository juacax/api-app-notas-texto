import userService from '../../services/user/index.service.js'
import validateHelper from '../../helpers/validate.helper.js'
import schema from '../../schemas/user/login.schema.js'

const main = async (req, res, next) => {
  try {
    //validar esquema
    await validateHelper(schema, req.body)
    //enviar al servicio los datos
    const token = await userService.login(req.body)
    //responder
    res.send(token)
  } catch (error) {
    next(error)
  }
}

export default main
