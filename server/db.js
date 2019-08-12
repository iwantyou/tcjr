var Sequelize = require('sequelize')
var sequelize = require('./mysql')
var User = sequelize.define('user', {
  // id: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   unique: true,
  //   primaryKey: true,
  //   autoIncrement: true
  // },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mobile: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  LV: {
    type: Sequelize.ENUM,
    values: ['lv1', 'lv2']
  },
  crate_time: {
    type: Sequelize.DATE,
    defaultvalue: new Date()
  }
}, {
  timestamps: false
})
User.sync([{ force: true }])
module.exports = User
