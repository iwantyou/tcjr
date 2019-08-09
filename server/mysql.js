var Sequelize = require('sequelize')
var sequelize = new Sequelize('test', 'root', 'du118783', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3030,
  pool: {
    max: 10,
    min: 0
  },
  timezone: '+ 08:00'
})
var User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER
  }
})
