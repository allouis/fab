var http = require('http')
var ws = require('websocket-stream')
var ecstatic = require('ecstatic')(__dirname + '/public')

var wsStoreAdapter = require('fab-ws-adapter')
var store = require('./store')()

var server = http.createServer(ecstatic)

ws.createServer({server: server}, function (socket) {
  var adapter = wsStoreAdapter(socket)

  adapter.pipe(store).pipe(adapter)
})

server.listen(5734)
