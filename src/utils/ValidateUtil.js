const ValidateUtil = {}

ValidateUtil.isPhoneNumber = function (phone) {
  if (!(/^1[34578]\d{9}$/.test(phone))) {
    return false
  }
  return true
}

ValidateUtil.isNumber = function (value) {
  if (value !== null && value !== '') {
    return !isNaN(value)
  }
  return false
}

export default ValidateUtil
