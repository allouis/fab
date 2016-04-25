module.exports = create

var createStore = require('fab-store')

var initialState = {
  name: 'fabien',
  count: 0
}

function create () {
  var store = createStore(function (state, action) {
    switch (action.type) {
      case 'inc':
        return Object.assign({}, state, { count: state.count + 1})
      default: return state
    }
  }, initialState)
  return store
}
