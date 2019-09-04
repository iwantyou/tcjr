var db = require('../mysql')
var Sequelize = require('sequelize')
/* eslint-disable no-new */
var Fulltime = db.define('fulltime', {
  item_id: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncreament: true }, // 职位id
  item_title: { type: Sequelize.TEXT, allowNull: false }, // 职位名称
  item_des: { type: Sequelize.STRING, allowNull: true }, // 职位描述
  item_privence: { type: Sequelize.STRING, allowNull: true }, // 归属省
  createtime: { type: Sequelize.DATE, allowNull: true }, // 创建时间
  updatetime: { type: Sequelize.DATE, allowNull: true }, // 更新时间
  item_public_time: { type: Sequelize.STRING, allowNull: false }, // 发布时间
  item_price: { type: Sequelize.INTEGER, allowNull: false }, // 薪资
  item_state: { type: Sequelize.ENUM('value 0', 'value 1') }, // 0 招聘中 1停止招聘
  item_finance: { type: Sequelize.STRING, allowNull: false }, // 公司是否融资
  item_name: { type: Sequelize.STRING, allowNull: false }, // 公司名称
  item_city: { type: Sequelize.STRING, allowNull: false }, // 公司所在城市
  item_cover: { type: Sequelize.STRING, allowNull: false }, // 发布人
  item_charge: { type: Sequelize.STRING, allowNull: false }, // 发布人职位
  item_position_state: {
    type: Sequelize.BOOLEAN, allowNull: false, get () { return this.getDataValue('item_position_state') ? '全职' : '兼职' }
  }// 1 全职 0 兼职
})
<<<<<<< HEAD
Fulltime.sync([{ force: true }]).then(() => {
  console.log('Fulltime 创建成功！')
}).catch(err=>{
  console.log('Fulltime 创建失败')
=======
Fulltime.sync([{ force: true }]).then(res => {
  console.log('fulltime creat success !!!')
>>>>>>> 8a819cc0cdf6fea2686b4f8775d6db1bf11e29a5
})
// for (let i = 0; i < fulltimedata.length; i++) {
//   Fulltime.create({
//     ...fulltimedata[1],
//     item_id: utils.makeuid(),
//     item_state: 0
//   })
// }

module.exports = {
  Fulltime
}
