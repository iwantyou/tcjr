var rq = require('request-promise')
var crypto = require('crypto')
var queryString = require('querystring')
const AppID = 'wxbfcdac50dc645f87'
const AppSecret = '16915520f7e20fbed4219487ac9d768d'
const key = 'djakueh5836nfio+'

class jiami {
   constructor(algorithm, key, iv = '') {
      this.algorithm = algorithm;
      this.key = key;
      this.iv = iv
   }
   aescode(message, inputcoding = "utf8", outputencoding = "base64") {
      const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv)
      cipher.setAutoPadding(true)
      let encrty = cipher.update(message, inputcoding, outputencoding)
      encrty += cipher.final(outputencoding)
      return encrty
   }
   decode(encrty, inputcoding = "base64", outputencoding = "utf8") {
      const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv)
      decipher.setAutoPadding(true)
      let decrty = decipher.update(encrty, inputcoding, outputencoding)
      decrty += decipher.final(outputencoding)
      return decrty
   }
}

async function getimg(req, res) {
   res.json({ code: 0, msg: '请求成功', data: { imgurl: 'http://127.0.0.1:9566/view/img/b.png' } })

}
async function code(req, res) {
   let { code } = req.body
   let urloption = queryString.stringify({ js_code: code, appid: AppID, secret: AppSecret, grant_type: 'authorization_code' })
   rq('https://api.weixin.qq.com/sns/jscode2session?' + urloption).then(res1 => {
      let { openid, session_key } = JSON.parse(res1)
      console.log(openid, session_key)
      var session_3rd = new jiami('aes-128-ecb', key).aescode(openid + '.' + session_key)
      console.log(session_3rd)
      res.json({ code: 0, msg: '登陆成功', data: { session_3rd } })
      res.end()
   }).catch(err => {
      res.json({ code: 1, msg: '失败' })
      res.end()
   })
}
module.exports = function (router) {
   router.get('/v1/getimg', getimg)
   router.post('/v1/code', code)
   return router
}