var express = require('express')
var bodyparser = require('body-parser')
var http = require('http')
var servestatic = require('serve-static')
var cookieparser = require('cookie-parser')
// var cors = require('cors')
var path = require('path')
var { router } = require('./router/router')

var host = (process.env.HOST || '127.0.0.1')
var port = (process.env.PORT || 3000)
var app = express()
var server = http.Server(app)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cookieparser())
app.use('/static', servestatic(path.join(__dirname, '../static')))

function origin (opt) {
  if (opt) return opt
  return '*'
}
// 作用与app.use(cors()) 一样
app.all('*', function (req, res, next) {
  // console.log(res)
  res.header('Access-Control-Allow-Origin', origin(req.headers.origin))
  res.header('Access-Control-Allow-Headers', 'Content-type, accept, authen')
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('content-type', 'application/json;chartset:utf-8')
  if (req.method.toUpperCase() === 'OPTIONS') res.send(200) // 快速回应预请求
  else {
    next()
  }
})
app.use(router)
server.listen(port, host, function () {
  console.log(`process sever host:${host} port: ${port}`)
})
