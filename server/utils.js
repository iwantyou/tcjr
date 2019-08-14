var uuid = require('uuid/v4')
function makeuid () {
  return uuid().replace(/-/g, '')
}
function Rescode (res) {
  return new Promise((resolve, reject) => {
    resolve(res)
  })
}
module.exports = {
  makeuid,
  Rescode
}
