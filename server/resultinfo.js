var rescode = exports.rescode = {
  ok: 0, // 成功
  ERROR_AUTH: 1000, // 未授权
  ERROR_TOKEN: 1001, // token失效
  ERROR_CODE: 1002

}
var errmessage = {
  0: '成功',
  1000: '未授权',
  1001: 'token失效',
  1002: '密码格式错误'
}

function Resff (rescode) {
  this.rescode = rescode
}

Resff.prototype.initmessage = function () {
  this.msg = errmessage[this.rescode || 0]
  return this
}
exports.RES_SUCCESS = function (data) {
  var result = new Resff()
  result.code = 0
  result.data = data
  var success = result.initmessage()
  return success
}
exports.RES_ERROR = function (errcode, errdata) {
  var result = new Resff(errcode)
  result.code = errcode
  result.data = errdata
  var fail = result.initmessage()
  return fail
}
