var db = require('../db')
var Sequelize = require('sequelize')
var rescode = require('../resultinfo')
var RES_SUCCESS = require('../resultinfo')
var RES_ERROR = require('../resultinfo')
var fulldata = require('../data/fulltimedata')
var joi = require('@hapi/joi')
const Op = Sequelize.Op

// 全职职位
const fulltime = async function (req, res) {
  // eslint-disable-next-line camelcase
  const { limit, page, item_position_state } = req.body
  var schema = joi.object().keys({
    limit: joi.number().required(),
    page: joi.number().required(),
    item_position_state: joi.values(0, 1)
  })
  const validate = joi.validate(req.body, schema)
  if (validate.error) { res.json(RES_ERROR(rescode.ERROR_FORMAT)); res.end() }
  await db.Fulltime.bulkCreate(fulldata)
  let result = await db.Fulltime.findAndCount({
    where: { item_position_state },
    limit: limit,
    raw: true,
    offset: (page - 1) * limit
  }).then(res1 => { res1.get({ plain: true }) })
  const loadmore = result.count % limit !== 0 && result.length < 9
  if (result.error) {
    res.json(RES_ERROR(rescode.ERROR_CODE, result.error))
    res.end()
  } else {
    res.json(RES_SUCCESS({ result, loadmore }))
    res.end()
  }
}

module.exports = fulltime
