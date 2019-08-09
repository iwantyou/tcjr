var express = require('express')
var bodyparser = require('body-parser')
var http = require('http')
var servestatic = require('serve-static')
var cookieparser = require('cookie-parser')
var cors = require('cors')
var path = require('path')

var host = process.env.HOST || 'localhost'
var port = process.env.PORT || 3000
var app = express()
var server = http.Server(app)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cookieparser())
app.use(cors())
app.use('/static', servestatic(path.join(__dirname, '../static')))

server.listen(host, port, function () {
  console.log(`process sever host:${host} port: ${port}`)
})
