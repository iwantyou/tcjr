var uuid = require('uuid/v4')
var crypto = require('crypto')
var config = require('./config')
var moment = require('moment')
function makeuid () {
  return uuid().replace(/-/g, '')
}
function Rescode (res) {
  return new Promise((resolve, reject) => {
    resolve(res)
  })
}
// 密码 + salt
/**
 * @param {*} password 登录密码
 * @param {*} salt  数据库中的salt字段
 */
function getpw (password, salt) {
  var str = password + salt
  var hash = crypto.createHmac('sha512', config.jwt_secret)
  return hash.update(str).digest('hex')
}
// slat + 密码
/**
 * @param {*} password 登陆密码
 * @param {*} salt 数据库中的salt字段
 * @param {*} password2 数据可中的password字段
 */
function checkpw (password, salt, password2) {
  return getpw(password, salt) === password2
}
/**
 * date : now
 */
function salt () {
<<<<<<< HEAD
  return 's:'
=======
  let time = moment().valueOf()
  return time.toString().substr(2, 5)
>>>>>>> 8a819cc0cdf6fea2686b4f8775d6db1bf11e29a5
}
/**
 * 默认昵称
 */
function getname (mobile) {

}
function getDate(){
  return Date.now()
}
module.exports = {
  makeuid,
  Rescode,
  getpw,
  checkpw,
  salt,
  getDate
}
