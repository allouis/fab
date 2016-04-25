var defaultEvents = require('./update-events')

module.exports = copyEvents
function copyEvents (f, t, customEvents) {
  var events = customEvents || defaultEvents
  for (var i = 0; i < events.length; i++) {
    var ev = events[i]
      if (t[ev]) { // if new element has a whitelisted attribute
        f[ev] = t[ev] // update existing element
      } else if (f[ev]) { // if existing element has it and new one doesnt
        f[ev] = undefined // remove it from existing element
      }
  }
}
