var router = require('express').Router()
var Joi = require('@hapi/joi')
var db = require('../db')
var config = require('../config')
var upload = require('../upload')
var resultinfo = require('../resultinfo')
var { rescode } = require('../resultinfo')
var { RES_SUCCESS } = require('../resultinfo')
var { RES_ERROR } = require('../resultinfo')
var creatToken = require('../middleware/creatToken')
var { fulltime, fullsort, postiondetail } = require('./fulltime')
var creatresume = require('./resum')
var utils = require('../utils')

// 登录
const login = async function (req, res) {
  console.log('登录', req.body)
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
  let admin = await db.User.findOne({ where: { username }, attributes: ['salt', 'password'] })
  console.log(admin)
  let token = creatToken(req.body, config.jwt_secret)
  if (admin.err) { res.json(RES_ERROR(rescode.ERROR_ACCOUNT)); res.end() } else {
    if (utils.checkpw(password, admin.salt, admin.password)) {
      res.json(RES_SUCCESS(token))
      res.end()
    } else {
      res.json(RES_ERROR(rescode.ERROR_ACCOUNT))
      res.end()
    }
  }
}
// 注册
const register = async function (req, res) {
  const { name, password } = req.body
  const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().min(6).max(16).required()
    // mobile: Joi.number().length(11).required()
    // repassword: Joi.string().min(6).max(16).required()
  })
  var result = Joi.validate(req.body, schema)
  if (result.error) {
    res.json(RES_ERROR(rescode.ERROR_FORMAT))
    res.end()
  } else {
    try {
      var user = await db.User.findOrCreate({ where: { username }, defaults: { name, password, resum_id: utils.makeuid() } })
      console.log(JSON.stringify(user))
      if (user[1]) { res.json(RES_SUCCESS({ message: '注册成功' })); res.end() } else { res.json(RES_ERROR({})); res.end() }
    } catch (err) {
      console.log(err, '查询失败')
      res.end()
    }
  }
}
// 注册1 
const register1 = async function(req, res){
  const {username, password} = req.body
  console.log(JSON.stringify(req.body))
  var schema = Joi.object().keys({
    username: Joi.string().required(),
    password:Joi.string().required()
  })
  var result = Joi.validate(req.body, schema)
  if(result.error) {res.json(RES_ERROR(rescode.ERROR_ACCOUNT));res.end()}
  else{
    var userRes =await db.User.findOrCreate({where:{username},defaults:{createTime:Date.now(),password}}).then(res=>res).catch(err=>err)
    if(userRes[1]){
      // console.log(JSON.stringify(RES_SUCCESS({message: '注册成功'})))
      console.log('创建成功')
      res.json(RES_SUCCESS({message: '注册成功'}))
      res.end()
    }else{
      res.json(RES_ERROR(rescode.ERROR_HAVE,{message:'注册失败'}))
      res.end()
    }
    //  console.log(JSON.stringify(userRes))
    // 新建 是标志位为true
    // var userRes = await db.User.create({username,password,createTime:Date.now()},{raw: true})
    // console.log(JSON.stringify(userRes))
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
router.post('/v2/fullsort', fullsort)
router.post('/v2/postiondetail', postiondetail)
router.post('/v2/register1', register1)
module.exports = { router }
