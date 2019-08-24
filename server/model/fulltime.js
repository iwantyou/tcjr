var db = require('../mysql')
var Sequelize = require('sequelize')
/* eslint-disable no-new */
var Fulltime = db.define('fulltime', {
  item_id: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncreament: true }, // 职位id
  item_title: { type: Sequelize.TEXT, allowNull: false }, // 职位名称
  item_des: { type: Sequelize.ARRAY, allowNull: true }, // 职位描述
  item_privence: { type: Sequelize.STRING, allowNull: true }, // 归属省
  createdAt: { type: Sequelize.DATE, allowNull: true, defaultValue: Date.now() }, // 创建时间
  updateAt: { type: Sequelize.DATE, allowNull: true, defaultValue: Date.now() }, // 更新时间
  item_public_time: { type: Sequelize.STRING, allowNull: false }, // 发布时间
  item_price: { type: Sequelize.INTEGER, allowNull: false }, // 薪资
  item_state: { type: Sequelize.ENUM, values: [0, 1] }, // 0 招聘中 1停止招聘
  item_finance: { type: Sequelize.STRING, allowNull: false }, // 公司是否融资
  item_name: { type: Sequelize.STRING, allowNull: false }, // 公司名称
  item_city: { type: Sequelize.STRING, allowNull: false }, // 公司所在城市
  item_cover: { type: Sequelize.STRING, allowNull: false }, // 发布人
  item_charge: { type: Sequelize.STRING, allowNull: false }, // 发布人职位
  item_position_state: {
    type: Sequelize.BOOLEAN, allowNull: false, get () { return this.getDataValue('item_position_state') ? '全职' : '兼职' }
  }// 1 全职 0 兼职
})
Fulltime.sync([{ force: true }])
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
