var Sequelize = require('sequelize')
var sequelize = require('../mysql')
var { Resume } = require('./establish')
var utils = require('../utils')
var User = sequelize.define('user', {
  id: { type: Sequelize.INTEGER, allowNull: false, unique: true, primaryKey: true, defaultValue: utils.makeuid() }, // 用户id
  idcars: { type: Sequelize.ENUM('value 0', 'value 1'), allowNull: true }, // 0 求职方 1 招聘方
  name: { type: Sequelize.STRING, allowNull: false, defaultValue: 'your name' }, // 用户昵称
  password: { type: Sequelize.STRING, allowNull: false }, // 用户密码
  mobile: { type: Sequelize.INTEGER, allowNull: true }, // 用户手机
  // LV: { type: Sequelize.ENUM, values: ['lv1', 'lv2'] }, // 用户级别
  createdtime: { type: Sequelize.DATE, defaultValue: Date.now() }, // 创建时间
  updatedAt: { type: Sequelize.DATE, defaultValue: Date.now() }, // 更新时间
  resume_id: { type: Sequelize.STRING, allowNull: false } // 关联简历主键
},
{
  timestamps: false,
  tableName: 'user'
})
User.hasOne(Resume, {
  foreignKey: 'user_id',
  key: 'resume_id'
})
User.sync()
module.exports = {
  User
}
