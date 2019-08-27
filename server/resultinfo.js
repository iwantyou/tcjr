var rescode = exports.rescode = {
  ok: 0, // 成功
  // ERROR_AUTH: 1000, // 未授权
  ERROR_TOKEN: 1001, // token失效
  ERROR_OBJECTNULL: 1002, // 请求对象不存在
  ERROR_FORMAT: 1003,
  ERROR_ACCOUNT: 1004,
  ERROR_NULL: 1005,
  ERROR_HAVE: 1006,

}
var errmessage = {
  0: '成功',
  // 1000: '未授权',
  1001: '您的账户异常',
  1002: '请求对象不存在',
  1003: '您提交的数据格式错误',
  1004: '登陆失败[账户或密码错误]',
  1005: '账户不存在',
  1006: '账户已存在'
}

function Resff (rescode) {
  this.code = rescode
}

Resff.prototype.initmessage = function () {
  this.msg = errmessage[this.code]
  return this
}
exports.RES_SUCCESS  = function (data) {
  var result = new Resff(rescode.ok)
  result.data = data
  return result.initmessage()
}
exports.RES_ERROR  = function (errcode, data = null) {
  var result = new Resff(errcode)
  if (data) { result.data = data; }
  return result.initmessage()
}
