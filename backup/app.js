var express = require('express')
var app = express()
var server = require('http').createServer(app)
var port = 8085;
var io = require('socket.io')(server, {
  origins: 'http://194.44.111.70:8086',
})

var { onconnect } = require('./services/sockets/websocket.service')

onconnect(io)

server.listen(port, function() {
  console.log(`Server is listenings ${port} port`)
})
