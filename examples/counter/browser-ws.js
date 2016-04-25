var ws = require('websocket-stream')
var framework = require('fab-app')
var wsStoreAdapter = require('fab-ws-adapter')

var main = require('./components/main')

var socket = ws('ws://' + location.host)
var adapter = wsStoreAdapter(socket)

var app = framework(main /*, opts...*/)

adapter.pipe(app).pipe(adapter)

app.appendTo(document.body)
