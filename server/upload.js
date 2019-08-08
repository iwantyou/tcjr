var multer = require('multer')
//处理上传图片  formdata格式
const upload = multer({
  dest: '../upload'
})
module.exports = upload