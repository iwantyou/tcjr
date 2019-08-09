var router = require('express').Router()
var config = require('./config')
var upload = require('./upload')
router.post('/v1/upload', upload.single('file'), async function (req, res) {
  const { fieldname, originalname, mimetype, destination, size } = req.file
  if (!config.mimetype.includes(mimetype)) { res.json({ code: 1, message: '失败', data: { msg: '只能上传png,jpeg,jpg格式' } }) }
  if (size > config.size) { res.json({ code: 1, message: '失败', data: { msg: '文件大小不能超过10M' } }) }
  res.json({ code: 0, message: '成功' })
  res.end()
})
module.exports = { router }
