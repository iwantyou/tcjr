var db = require('../db')
var Sequelize = require('sequelize')
var rescode = require('../resultinfo')
var RES_SUCCESS = require('../resultinfo')
var RES_ERROR = require('../resultinfo')
var fulldata = require('../data/fulltimedata')
const Op = Sequelize.Op

// 全职职位
const fulltime = async function (req, res) {
  await db.Fulltime.bulkCreate(fulldata)
  let result = await db.Fulltime.findAll({
    raw: true
  })
  if (result.error) {
    res.json(RES_ERROR(rescode.ERROR_CODE, result.error))
    res.end()
  } else {
    res.json(RES_SUCCESS(result))
    res.end()
  }
}

module.exports = fulltime
