var Transform = require('readable-stream/transform')
exports = module.exports = createStore
exports.createStore = createStore

function createStore(reducer, state, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer, state) 
  }

  var store = new Transform({
    transform: function (action, enc, cb) {
      state = reducer(state, action)
      this.push(state)
      cb()
    },
    objectMode: true
  })

  process.nextTick(function () {
    store.write({ type: 'BLANK' })
  })
  return store
}
