var db = require('../db')
var Sequelize = require('sequelize')
var { rescode } = require('../resultinfo')
var { RES_SUCCESS } = require('../resultinfo')
var { RES_ERROR } = require('../resultinfo')
var fulldata = require('../data/fulltimedata')
var joi = require('@hapi/joi')
const Op = Sequelize.Op

// 职位获取
const fulltime = async function (req, res) {
  // eslint-disable-next-line camelcase
  const { limit, page, item_position_state } = req.body
  var schema = joi.object().keys({
    limit: joi.number().required(),
    page: joi.number().required()
  })
  const validate = joi.validate(req.body, schema)
  if (validate.error) { res.json(RES_ERROR(rescode.ERROR_FORMAT)); res.end() }
  await db.Fulltime.bulkCreate(fulldata)
  let result = await db.Fulltime.findAndCountAll({
    where: { item_position_state },
    limit: limit,
    offset: (page - 1) * limit
  }).then(res1 => { res1.get({ plain: true }) })
  const loadmore = !(result.count % limit !== 0 && result.length < limit)
  if (result.error) {
    res.json(RES_ERROR(rescode.ERROR_CODE, result.error))
    res.end()
  } else {
    res.json(RES_SUCCESS({ result, loadmore }))
    res.end()
  }
}

// 职位排序 热度 时间
const fullsort = async function (res, req) {
  // eslint-disable-next-line camelcase
  const { limit, page, item_position_state, feather } = req.body
  var schema = joi.object().keys({
    limit: joi.number().required(),
    page: joi.number().required(),
    feather: joi.string().required()
  })
  var validate = joi.validate({ limit, page }, schema)
  if (validate.error) { res.json(RES_ERROR(rescode.ERROR_FORMAT)); res.status(404).end() }
  let result = await db.Fulltime.findAndCountAll({
    where: { item_position_state },
    limit,
    offset: (page - 1) * limit,
    order: [
      [feather, 'DESC']
    ]
  }).then(res1 => { res1.get({ plain: true }) })
  const loadmore = !(result.count % limit !== 0 && result.length < limit)
  if (result.error) {
    res.json(RES_ERROR(rescode.ERROR_CODE, result.error))
    res.end()
  } else {
    res.json(RES_SUCCESS({ result, loadmore }))
    res.end()
  }
}
//  职位详情
const postiondetail = async function (req, res) {
  // eslint-disable-next-line camelcase
  const { item_id } = req.body
  var result = await db.Fulltime.findById({ item_id }).then(res1 => res1.get({ plain: true }))
  if (result.error) { res.json(RES_ERROR(rescode.ERROR_FORMAT)); res.end() } else {
    res.json(RES_SUCCESS(result));
    res.end()
  }
}
module.exports = { fulltime, fullsort, postiondetail }
