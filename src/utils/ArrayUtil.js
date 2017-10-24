const ArrayUtil = {}

ArrayUtil.removeNumber = function (str1, str2, number) {
  if (arguments.length !== 3) {
    throw new Error('参数不正确')
  }
  const arr1 = str1.split(',')
  const arr2 = str2.split(',')
  const index = arr1.findIndex(a => a === number)
  if (index < 0) {
    throw new Error('不存在该记录')
  }
  arr1.splice(index, 1)
  arr2.splice(index, 1)
  const nArr1 = arr1.join(',')
  const nArr2 = arr2.join(',')
  return [nArr1, nArr2]
}
