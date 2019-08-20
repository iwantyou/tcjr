var Sequelize = require('sequelize')
var sequelize = require('../mysql')

var Resume = sequelize.define('resume', {
  user_id: { type: Sequelize.STRING, unique: true },
  sex: { type: Sequelize.ENUM, values: ['男', '女'], defaultvalue: '男' }, // 性别
  birthday: { type: Sequelize.STRING, allowNull: true }, // 生日
  deliver: { type: Sequelize.ARRAY, allowNull: true }, // 投递职位
  education: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get () {
      if (this.getDataValue('education') === 0) return '高中生'
      if (this.getDataValue('education') === 1) return '本科生'
      if (this.getDataValue('education') === 2) return '硕士生'
      if (this.getDataValue('education') === 3) return '博士生'
    }
  }
})
// Resume.belongsTo('User', {
//   foreignKey: 'user_id',
//   as: 'resume',
//   targetKey: 'resume_id'
// })
Resume.async()
module.exports = {
  Resume
}
