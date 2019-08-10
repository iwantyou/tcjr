var jwt = require('jsonwebtoken')
const checkToken = function(token, key){
  return jwt.verify(token, key)
}
module.exports = checkToken