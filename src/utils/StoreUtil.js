export default {
  clearError (errors, errorType) {
    errors = errors.filter(e => e.type !== errorType)
    return errors
  },
  findError (errors, errorType) {
    const error = errors.find(e => e.type === errorType)
    return (error && error.message) || null
  }
}
