// 转换数字
function Conversion (num1) {
  if (typeof num1 === 'number' || !Number.isNaN(Number(num1))) {
    let num = num1.toString()
    let leng = num.length
    if (leng < 3) return num
    let yu = leng % 3
    return yu > 0 ? num.slice(0, yu) + ',' + num.slice(yu).match(/\d{3}/g).join(',') : num.slice(yu).match(/\d{3}/g).join(',')
  }
  return new Error('格式错误')
}
