var router = require('express').Router()
var Joi = require('@hapi/joi')
var db = require('../db')
var config = require('../config')
var upload = require('../upload')
var rescode = require('../resultinfo')
var RES_SUCCESS = require('../resultinfo')
var RES_ERROR = require('../resultinfo')
var creatToken = require('../middleware/creatToken')
var fulltime = require('./fulltime')
var creatresume = require('./resum')
var utils = require('../utils')

// 登录
const login = async function (req, res) {
  const { username, password } = req.body
  const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().alphanum().min(6).max(16).required()
  })
  const result = Joi.validate(req.body, schema)
  if (result.error) {
    res.json(RES_ERROR(rescode.ERROR_FORMAT))
    res.end()
  }
  let admin = await db.User.findOne({ where: { username, password }, attributes: ['username', 'password'] }).then(res1 => res1.get({ plain: true }))
  console.log(admin)
  let token = creatToken(req.body, config.jwt_secret)
  if (admin.err) { res.json(RES_ERROR(rescode.ERROR_ACCOUNT)); res.end() } else {
    res.json(RES_SUCCESS(token))
    res.end()
  }
}
// 注册
const register = async function (req, res) {
  const { name, password, mobile } = req.body
  const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().min(6).max(16).required(),
    mobile: Joi.number().length(11).required()
    // repassword: Joi.string().min(6).max(16).required()
  })
  var result = Joi.validate(req.body, schema)
  if (result.error) {
    res.json(RES_ERROR(rescode.ERROR_FORMAT))
    res.end()
  } else {
    try {
      var user = await db.User.findOrCreate({ where: { mobile }, defaults: { name, password, resum_id: utils.makeuid() } })
      console.log(JSON.stringify(user))
      if (user[1]) { res.json(RES_SUCCESS({ message: '注册成功' })); res.end() } else { res.json(RES_ERROR({})); res.end() }
    } catch (err) {
      console.log(err, '查询失败')
      res.end()
    }
  }
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
router.post('/v2/upload', upload.single('file'), uploadfile)
router.post('/v2/getfulldata', fulltime)
router.post('/v2/creatresume', creatresume)
module.exports = { router }
