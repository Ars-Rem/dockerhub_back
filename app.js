var express = require('express')
var app = express()
var server = require('http').createServer(app)
var port = 4730;
var io = require('socket.io')(server, {
  //origins: 'http://172.17.0.2:80',
  origins: 'http://194.44.111.70:4731',
  
})

var { onconnect } = require('./services/sockets/websocket.service')

onconnect(io)

server.listen(port, function() {
  console.log(`Server is listenings ${port} port`)
})
