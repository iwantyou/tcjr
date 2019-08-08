var Sequelize = require('sequelize')
var sequelize = new Sequelize('test', 'root', 'du118783',{
  host:'localhost',
  dialect:'mysql',
  pool:{
    max: 10,
    min: 0,
  }
})
var User = sequelize.define('user', {
  id:{
    type:Sequelize.INTEGER,
  }
})