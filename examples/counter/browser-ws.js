var ws = require('websocket-stream')
var fab = require('fab-app')
var wsStoreAdapter = require('fab-ws-adapter')

var main = require('./components/main')

var socket = ws('ws://' + location.host)
var adapter = wsStoreAdapter(socket)

var app = fab(main)

adapter.pipe(app).pipe(adapter)

app.appendTo(document.body)
