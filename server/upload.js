var multer = require('multer')
const upload = multer({
  dest: '../upload'
})
// 处理图片a
module.exports = upload
