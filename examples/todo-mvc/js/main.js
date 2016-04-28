var fab = require('fab-app')
var App = require('./components/App')

var initialState = []

var store = require('./store')(initialState)

var app = fab(App)

app.pipe(store).pipe(app)

app.appendTo(document.body)
