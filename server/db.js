// var model = require('./model')

// module.exports = {
//   ...model
// }
var sequelize = require('./mysql')
var Sequelize = require('sequelize')
var User = sequelize.define('user',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
  },
  username:{
    type:Sequelize.STRING,
    allowNull:false
  },
  password:{
    type:Sequelize.STRING,
    allowNull:false
  },
  createTime:{
    type:Sequelize.DATE,
    allowNull: false
  },
  deleteTime:{
    type:Sequelize.DATE,
    allowNull: true
  }
},{
  freezeTableName: true,
  tableName: 'user',
  paranoid: true,
  // underscored: true
})
User.sync().then(() => {
  console.log('user表创建成功!!!')
}).catch(() => {
  console.log('user 表创建失败')
})
module.exports = {
  User
}