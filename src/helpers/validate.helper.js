import errorHelper from './errors.helper.js'

const main = async (schema, data) => {
  try {
    await schema.validateAsync(data)
  } catch (error) {
    console.error(error)
    errorHelper.badRequestError(error.details[0]?.message)
  }
}

export default main
