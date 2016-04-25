module.exports = fab
var duplexify = require('duplexify').obj
var through = require('through2').obj
var morphdom = require('morphdom')
var copyEvents = require('copy-event-attributes')

var morphOpts = {
  onBeforeMorphEl: copyEvents
}

function fab (component, opts) {
  var stateStream = through(function (state, enc, cb) {
    if (!app.el) app.el = render(state)
    else morphdom(app.el, render(state), morphOpts)
    cb()
  })

  var actionStream = through()

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

  return app
}
