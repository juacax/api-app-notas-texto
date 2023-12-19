import jwt from 'jsonwebtoken'
import errorHelper from '../helpers/errors.helper.js'

const main = async (req, res, next) => {
  try {
    const { authorization } = req.headers
    if (!authorization) {
      errorHelper.notAuthorizedError('Token requerido')
    }

    let tokenInfo

    try {
      tokenInfo = jwt.verify(authorization, process.env.SECRET_KEY)
      req.user = tokenInfo
      next()
    } catch (error) {
      errorHelper.notAuthorizedError('Token inválido')
    }
  } catch (error) {
    next(error)
  }
}

export default main
