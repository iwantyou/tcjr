var Sequelize = require('sequelize')
var sequelize = require('../mysql')

var Resume = sequelize.define('resume', {
  sex: { type: Sequelize.ENUM('value 0', 'value 1') }, // 性别
  birthday: { type: Sequelize.STRING, allowNull: true }, // 生日
  deliver: { type: Sequelize.STRING, allowNull: true }, // 投递职位
  education: {
    type: Sequelize.INTEGER,
    allowNull: true,
    get () {
      if (this.getDataValue('education') === 0) return '高中生'
      if (this.getDataValue('education') === 1) return '本科生'
      if (this.getDataValue('education') === 2) return '硕士生'
      if (this.getDataValue('education') === 3) return '博士生'
    }
  }
})
Resume.sync().then(res => {
  console.log('resumetable creat success !!! ')
})
module.exports = {
  Resume
}
