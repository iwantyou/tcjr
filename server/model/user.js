var Sequelize = require('sequelize')
var sequelize = require('../mysql')
var { Resume } = require('./establish')
var utils = require('../utils')
var User = sequelize.define('user', {
<<<<<<< HEAD
  id: { type: Sequelize.INTEGER, allowNull: false, unique: true, primaryKey: true, defaultValue: utils.makeuid() }, // 用户id
  idcars: { type: Sequelize.ENUM('value 0', 'value 1'), allowNull: true }, // 0 求职方 1 招聘方
  name: { type: Sequelize.STRING, allowNull: false, defaultValue: 'your name' }, // 用户昵称
  password: { type: Sequelize.STRING, allowNull: false }, // 用户密码
  mobile: { type: Sequelize.INTEGER, allowNull: true }, // 用户手机
  // LV: { type: Sequelize.ENUM, values: ['lv1', 'lv2'] }, // 用户级别
  createdtime: { type: Sequelize.DATE, defaultValue: Date.now() }, // 创建时间
  updatedAt: { type: Sequelize.DATE, defaultValue: Date.now() }, // 更新时间
=======
  id: { type: Sequelize.INTEGER, allowNull: false, unique: true, primaryKey: true }, // 用户id
  idcars: { type: Sequelize.ENUM('value 0', 'value 1'), allowNull: true }, // 0 求职方 1 招聘方
  name: { type: Sequelize.STRING, allowNull: false }, // 用户昵称
  password: { type: Sequelize.STRING, allowNull: false }, // 用户加密后密码
  salt: { type: Sequelize.STRING, allowNull: false }, // 密码加密盐值
  mobile: { type: Sequelize.INTEGER, allowNull: true }, // 用户手机
  // LV: { type: Sequelize.ENUM, values: ['lv1', 'lv2'] }, // 用户级别
  createdtime: { type: Sequelize.DATE, allowNull: false }, // 创建时间
  deletetime: { type: Sequelize.DATE, allowNull: true }, // 更新时间
>>>>>>> 79c611a887233aaca1df30234acb43e8910a41a3
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
