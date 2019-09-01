var Sequelize = require('sequelize')
var sequelize = require('../mysql')
var { User } = require('./user')

var Resume = sequelize.define('resume', {
  sex: { type: Sequelize.ENUM('value 0', 'value 1') }, // 性别
  birthday: { type: Sequelize.STRING, allowNull: true }, // 生日
  deliver: { type: Sequelize.STRING, allowNull: true }, // 投递职位
  education: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})
Resume.sync().then(() => {
  console.log('Resume 创建成功！')
}).catch(err=>{
  console.log(err,'Resume 创建失败')
})
module.exports = {
  Resume
}
