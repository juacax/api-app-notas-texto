const main = async (schema, data) => {
  try {
    await schema.validateAsync(data)
  } catch (error) {
    //disparar error
  }
}
