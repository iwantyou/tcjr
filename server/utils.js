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
  return 's:'
}
/**
 * 文本颜色
 * @param {*} str 字符串
 */
function textToColor (str) {
  if (!str || str.length === 0) return false;
  for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
  for (var j = 0, color = '#'; j < 3; color += ('00' + ((hash >> j++ * 2) & 0xFF).toString(16)).slice(-2));
  return color;
}
function getDate () {
  return Date.now()
}
module.exports = {
  makeuid,
  Rescode,
  getpw,
  checkpw,
  salt,
  textToColor
}
