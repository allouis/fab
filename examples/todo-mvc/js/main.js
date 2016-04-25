var fab = require('fab-app')
var App = require('./components/App')

var initialState = []

var app = fab(App)
app.appendTo(document.body)

var store = require('./store')(initialState)
store.pipe(app).pipe(store)
