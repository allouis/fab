var createStore = require('fab-store')
var reducer = require('./reducer')

module.exports = create

function create (initialState) {
	return createStore(reducer, initialState)
}
