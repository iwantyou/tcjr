var express = require('express')
var bodyparser = require('body-parser')
var http = require('http')
var servestatic = require('serve-static')
var cookieparser = require('cookie-parser')
var path = require('path')

var host = process.env.HOST || 'localhost'
var port = process.env.PORT || 3000
var app = express()
http.Server(app)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use(cookieparser())
app.use('/static', servestatic(path.join(__dirname, '../static')))

app.listen(host, port, function(){
  console.log(`process sever host:${host} port: ${port}`)
})
