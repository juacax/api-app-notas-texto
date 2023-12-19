import noteService from '../../services/note/index.service.js'
import validateHelper from '../../helpers/validate.helper.js'
import schema from '../../schemas/note/update.schema.js'

const main = async (req, res, next) => {
  try {
    const { noteId } = req.params
    const note = { ...req.body, id: noteId }
    await validateHelper(schema, note)

    await noteService.update(note, req.user.id)

    res.send('Nota actualizada con éxito')
  } catch (error) {
    next(error)
  }
}

export default main
