var fab = require('fab-app')
var main = require('./components/main')

var store = require('./store')

var app = fab(main)

store.pipe(app).pipe(store)

app.appendTo(document.body)
