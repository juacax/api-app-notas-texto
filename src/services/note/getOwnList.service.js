import getPool from '../../db/getPool.js'
import errorsHelper from '../../helpers/errors.helper.js'

const main = async (userId) => {
  try {
    //conectarnos
    const pool = await getPool()
    //dar de alta
    const sqlQuery = 'SELECT title FROM notes WHERE userId = ?'
    const values = [userId]

    const [notes] = await pool.query(sqlQuery, values)

    //devolver respuesta
    return notes
  } catch (error) {
    errorsHelper.internalServerError(error.message, 'CREATE_USER_ERROR')
  }
}

export default main
