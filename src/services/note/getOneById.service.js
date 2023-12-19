import getPool from '../../db/getPool.js'
import errorsHelper from '../../helpers/errors.helper.js'

const main = async (noteId) => {
  try {
    //conectarnos
    const pool = await getPool()
    //dar de alta
    const sqlQuery = 'SELECT * FROM notes WHERE Id = ?'
    const values = [noteId]

    const [notes] = await pool.query(sqlQuery, values)

    if (notes.length !== 1) {
      errorsHelper.notFoundError('Nota no encontrada', 'NOTE_NOT_FOUND')
    }

    //devolver respuesta
    return notes[0]
  } catch (error) {
    errorsHelper.internalServerError(error.message, 'CREATE_USER_ERROR')
  }
}

export default main
