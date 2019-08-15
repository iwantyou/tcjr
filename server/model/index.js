var fulltime = require('./fulltime')
var user = require('./user')
var establish = require('./establish')
var Sequelize = require('sequelize')
Sequelize.sync([{
  force: true
}])
module.exports = {
  ...fulltime,
  ...user,
  ...establish
}
