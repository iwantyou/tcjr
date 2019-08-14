var Sequelize = require('sequelize')
var sequelize = require('../mysql')
var utils = require('../utils')
var User = sequelize.define('user', {
  id: { type: Sequelize.INTEGER, allowNull: false, unique: true, primaryKey: true, defaultValue: utils.makeuid() },
  name: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  mobile: { type: Sequelize.INTEGER, allowNull: true },
  LV: { type: Sequelize.ENUM, values: ['lv1', 'lv2'] },
  createdAt: { type: Sequelize.DATE, defaultvalue: Date.now() },
  updatedAt: { type: Sequelize.DATE, defaultvalue: Date.now() }
},
{ timestamps: false }
)
User.sync([{ force: true }])
module.exports = { User }
