import getPool from '../../db/getPool.js'
import errorsHelper from '../../helpers/errors.helper.js'

const main = async (user) => {
  try {
    //conectarnos
    const pool = await getPool()
    //dar de alta
    const sqlQuery = 'INSERT INTO user (email, password) VALUES (?, ?)'
    const values = [user.email, user.password]

    const [response] = await pool.query(sqlQuery, values)

    if (response.affectedRows !== 1) {
      errorsHelper.conflictError(
        'Error al insertar el usuario',
        'CREATE_USER_ERROR'
      )
    }

    //devolver respuesta
    return response.insertId
  } catch (error) {
    errorsHelper.internalServerError(error.message, 'CREATE_USER_ERROR')
  }
}

export default main
