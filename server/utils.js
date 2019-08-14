var uuid = require('uuid/v4')
function makeuid () {
  return uuid().replace(/-/g, '')
}
module.exports = {
  makeuid
}
