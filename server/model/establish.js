var Sequelize = require('sequelize')
var sequelize = require('../mysql')

var Resume = sequelize.define('resume', {
  user_id: { type: Sequelize.STRING, unique: true, references: { model: 'User', key: 'id' } },
  sex: { type: Sequelize.ENUM, values: ['男', '女'] }, // 性别
  birthday: { type: Sequelize.STRING, allowNull: false }, // 生日
  deliver: { type: Sequelize.ARRAY, allowNull: true } // 投递职位
})
module.exports = {
  Resume
}
