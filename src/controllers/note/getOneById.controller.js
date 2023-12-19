import noteService from '../../services/note/index.service.js'
import validateHelper from '../../helpers/validate.helper.js'
import schema from '../../schemas/note/getOneById.schema.js'
import errorsHelper from '../../helpers/errors.helper.js'

const main = async (req, res, next) => {
  try {
    const { noteId } = req.params

    await validateHelper(schema, req.params)

    const note = await noteService.getOneById(noteId)

    if (note.userId !== req.user.id) {
      errorsHelper.notAuthorizedError('No tiene permisos para ver esta nota')
    }

    res.send({ message: 'Nota Obtenida', data: note })
  } catch (error) {
    next(error)
  }
}

export default main
