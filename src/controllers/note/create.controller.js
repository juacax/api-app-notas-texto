import noteService from '../../services/note/index.service.js'
import validateHelper from '../../helpers/validate.helper.js'
import schema from '../../schemas/note/create.schema.js'

const main = async (req, res, next) => {
  try {
    await validateHelper(schema, req.body)

    await noteService.create(req.body, req.user.id)

    res.send('Nota creada con éxito')
  } catch (error) {
    next(error)
  }
}

export default main
