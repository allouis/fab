var framework = require('fab-app')
var main = require('./components/main')
var store = require('./store')()

var app = framework(main /*, opts... */)

store.pipe(app).pipe(store)

app.appendTo(document.body)
