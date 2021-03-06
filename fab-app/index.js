module.exports = fab
var duplexify = require('duplexify').obj
var stream = require('readable-stream')
var morphdom = require('morphdom')
var copyEvents = require('copy-event-attributes')

var morphOpts = {
  onBeforeMorphEl: copyEvents
}

function fab (component, store) {
  var stateStream = new stream.Writable({
    write: function (state, enc, cb) {
      if (!app.el) app.el = render(state)
      else morphdom(app.el, render(state), morphOpts)
      cb()
    },
    objectMode: true
  })

  var actionStream = new stream.PassThrough({objectMode: true})

  function dispatch (action) {
    actionStream.write(action)
  }

  function render (state) {
    return component(state, dispatch)
  }

  var app = duplexify(stateStream, actionStream)

  app.appendTo = function appendTo (el) {
    if (app.el) return el.appendChild(app.el)
    setTimeout(appendTo.bind(null, el), 50)
  }
  
  if (store) {
    app.pipe(store).pipe(app) 
  }

  return app
}
