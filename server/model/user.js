var Sequelize = require('sequelize')
var sequelize = require('../mysql')
var utils = require('../utils')
var User = sequelize.define('user', {
  id: { type: Sequelize.INTEGER, allowNull: false, unique: true, primaryKey: true, defaultValue: utils.makeuid() }, // 用户id
  name: { type: Sequelize.STRING, allowNull: false }, // 用户昵称
  password: { type: Sequelize.STRING, allowNull: false }, // 用户密码
  mobile: { type: Sequelize.INTEGER, allowNull: true }, // 用户手机
  LV: { type: Sequelize.ENUM, values: ['lv1', 'lv2'] }, // 用户级别
  createdAt: { type: Sequelize.DATE, defaultvalue: Date.now() }, // 创建时间
  updatedAt: { type: Sequelize.DATE, defaultvalue: Date.now() }, // 更新时间
  resume_id: { type: Sequelize.STRING, allowNull: false } // 关联简历主键

},
{
  timestamps: false,
  tableName: 'user'
})
User.hasOne('Resume', {
  foreignKey: 'user_id'
})
module.exports = {
  User
}
