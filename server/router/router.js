var router = require('express').Router()
var Joi = require('@hapi/joi')
var db = require('../db')
var config = require('../config')
var upload = require('../upload')
var rescode = require('../resultinfo')
var RES_SUCCESS = require('../resultinfo')
var RES_ERROR = require('../resultinfo')

// 登录
const login = async function (req, res) {
  const { username, password } = req.body
  const schema = Joi.object().keys({
    username: Joi.string().required,
    password: Joi.string().min(6).max(16).required
  })
  const result = Joi.validate(req.body, schema)
  if (result.error) {
    res.json(RES_ERROR(rescode.ERROR_CODE, result.error))
    res.end()
  }
  const admin = await db.User.findOne({ where: { username, password } }).then(res => ({
    res,
    msg: true
  })).catch(err => err)
  if (admin.msg) res.json(RES_SUCCESS(admin.res))
}
// 注册
const register = async function (req, res) {
  const { username, password, valicode } = req.body
  const schema = Joi.object().keys({
    username: Joi.string().required,
    password: Joi.string().min(6).max(16).required,
    valicode: Joi.string().min(4).max(4).required
  })
  var result = Joi.validate(req.body, schema)
  if (result.error) { res.json({ code: 1, message: '失败' }) }
  {
    const user = await db.User.create({ username, password }).then(res => ({
      res,
      code: true
    })).catch(err => ({
      err,
      code: 1,
      msg: '注册失败'
    }))
    if (user.code) res.json({ code: 0, msg: '注册成功' })
    else { res.json({ code: 1, msg: '注册失败' }) }
  }
  res.end()
}

// 上传图片
const uploadfile = async function (req, res) {
  const { fieldname, originalname, mimetype, destination, size } = req.file
  if (!config.mimetype.includes(mimetype)) { res.json({ code: 1, message: '失败', data: { msg: '只能上传png,jpeg,jpg格式' } }) }
  if (size > config.size) { res.json({ code: 1, message: '失败', data: { msg: '文件大小不能超过10M' } }) }
  res.json({ code: 0, message: '成功' })
  res.end()
}
router.post('/v1/login', login)
router.post('/v1/register', register)
router.post('/v1/upload', upload.single('file'), uploadfile)
module.exports = { router }
