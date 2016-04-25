var through = require('through2').obj
exports = module.exports = createStore
exports.createStore = createStore

function createStore(reducer, state, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer, state) 
  }

  var store = through(function (action, enc, cb) {
    state = reducer(state, action)
    this.push(state)
    cb()
  })

  process.nextTick(function () {
    store.write({ type: 'BLANK' })
  })
  return store
}
