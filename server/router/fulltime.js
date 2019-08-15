var db = require('../db')
var Sequelize = require('sequelize')
var rescode = require('../resultinfo')
var RES_SUCCESS = require('../resultinfo')
var RES_ERROR = require('../resultinfo')

const Op = Sequelize.Op

// 全职职位
const fulltime = async function (req, res) {
  let result = await db.Fulltime.findAll({
    attributes: {
      exclude: ['createdAt', 'updateAt']
    },
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
