var db = require('../mysql')
var Sequelize = require('sequelize')
var utils = require('../utils')
var fulltimedata = require('../data/fulltimedata')
var Fulltime = db.define('fulltime', {
  item_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncreament: true
  },
  item_title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  item_des: {
    type: Sequelize.ARRAY,
    allowNull: true
  },
  item_privence: {
    type: Sequelize.STRING,
    allowNull: true
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: Date.now()
  },
  updateAt: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: Date.now()
  },
  item_public_time: {
    type: Sequelize.STRING,
    allowNull: false
  },
  item_price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  item_state: {
    type: Sequelize.ENUM,
    values: [0, 1] // 0 招聘中 1停止招聘
  },
  item_finance: {
    type: Sequelize.STRING,
    allowNull: false
  },
  item_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  item_city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  item_cover: {
    type: Sequelize.STRING,
    allowNull: false
  },
  item_charge: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
Fulltime.sync([{ force: true }])
for (let i = 0; i < fulltimedata.length; i++) {
  Fulltime.create({
    ...fulltimedata[1],
    item_id: utils.makeuid(),
    item_state: 0
  })
}
module.exports = { Fulltime }
