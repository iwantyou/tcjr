var Sequelize = require('sequelize')
if (!process.env.MYSQL_URL) {
  console.log('应用开始之前，请配置MYSQL_URL')
  process.exit(1)
} else {
  console.log('MySQL 启动成功')
}
var sequelize = new Sequelize(process.env.MYSQL_URL, {
  pool: {
    max: 10,
    min: 0,
    maxIdleTime: 5000
  },
  define: {
    freezeTableName: true,
    timestamps: false
  },
  timezone: '+08:00'
})

module.exports = sequelize
