var jwt = require('jsonwebtoken')
const creatToken = function(data, key){
  return  jwt.sign(data, key, {expiresIn: '1d'})
}
module.exports = creatToken 
