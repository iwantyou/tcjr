var db = require('../utils')
var rescode = require('../resultinfo')
var RES_SUCCESS = require('../resultinfo')
var RES_ERROR = require('../resultinfo')
var Joi = require('@hapi/joi')

const resume = async function (req, res) {
  const { resumid, sex, birthday, deliver, education } = req.body
  var schema = Joi.object().keys({
    resumid: Joi.number().required(),
    sex: Joi.string(),
    birthday: Joi.date(),
    deliver: Joi.array(),
    education: Joi.number().length(1)
  })
  var result = Joi.validate(req.body, schema)
  if (result.error) {
    var userres = await db.User.findAll({
      where: {
        resum_id: resumid
      }
    })
    var resumres = await userres.createResume({
      sex, birthday, deliver, education
    }).then(res1 => res1.get)({ plain: true })
    if (!resumres.error) {
      res.json(RES_SUCCESS({ message: '简历创建成功' }))
      res.end()
    } else {
      res.json(RES_ERROR({ message: '简历创建失败' }))
      res.end()
    }
  } else {
    res.json(RES_ERROR({ message: '格式错误' }))
    res.end()
  }
}
module.exports = resume
