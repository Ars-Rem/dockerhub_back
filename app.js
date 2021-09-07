var express = require('express')
var app = express()
var server = require('http').createServer(app)
var port = 4730;
var io = require('socket.io')(server, {
<<<<<<< HEAD
  origins: 'localhost:3000',
=======
  origins: 'http://194.44.111.70:4731',
>>>>>>> be40fe0e8cac92e9d15e0b829d99eb65e7ed0864
})

var { onconnect } = require('./services/sockets/websocket.service')

onconnect(io)

server.listen(port, function() {
  console.log(`Server is listenings ${port} port`)
})
