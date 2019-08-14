var fulltimemodel = require('../model/fulltime')

// 全职职位
const fulltime = async function (req, res) {
  let result = await fulltimemodel.findAll({
    attributes: {
      exclude: ['item_id', 'item_privence', 'item_city', 'createdAt', 'updateAt']
    }
  })
  if (result.error) {
    res.json({ code: 1, msg: '请求失败' });
    res.end()
  } else {
    res.json({ result, code: 0, msg: '成功' })
    res.end()
  }
}
module.exports = fulltime
