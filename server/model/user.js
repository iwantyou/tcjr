var Sequelize = require('sequelize')
var sequelize = require('../mysql')
var { Resume } = require('./establish')
var utils = require('../utils')
var User = sequelize.define('user', {
  id: { type: Sequelize.INTEGER, allowNull: false, autoIncreament: true, primaryKey: true }, // 用户id
  idcars: { type: Sequelize.ENUM('value 0', 'value 1'), allowNull: true }, // 0 求职方 1 招聘方
  username: { type: Sequelize.STRING, allowNull: false }, // 用户昵称
  password: { type: Sequelize.STRING, allowNull: false }, // 用户加密后密码
  salt: { type: Sequelize.STRING, allowNull: false }, // 密码加密盐值
  mobile: { type: Sequelize.INTEGER, allowNull: true }, // 用户手机
  // LV: { type: Sequelize.ENUM, values: ['lv1', 'lv2'] }, // 用户级别
  createdtime: { type: Sequelize.DATE, allowNull: false }, // 创建时间
  deletetime: { type: Sequelize.DATE, allowNull: true }, // 更新时间
  resume_id: { type: Sequelize.STRING, allowNull: false } // 关联简历主键
},
{
  timestamps: false,
  tableName: 'user'
})
User.hasMany(Resume, {
  foreignKey: 'user_id',
  sourceKey: 'resume_id'
})
User.sync().then(() => {
  console.log('user 创建成功！')
}).catch(err=>{
  console.log('user 创建失败')
})
module.exports = {
  User
}
