var Sequelize = require('sequelize')
if (!process.env.MYSQL_URL) {
  console.log('应用开始之前，请配置MYSQL_URL')
  process.exit(1)
}
var sequelize = new Sequelize(process.env.MYSQL_URL, {
  pool: {
    max: 10,
    min: 0
  },
  define: {
    freezeTableName: true
  },
  timezone: '+08:00'
})

module.exports = sequelize
