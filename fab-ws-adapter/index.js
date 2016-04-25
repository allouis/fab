module.exports = wsStoreAdapter

var split = require('split2')
var duplexify = require('duplexify').obj
var through = require('through2').obj

function wsStoreAdapter (socket) {
  var parse = split(JSON.parse)

  var stringify = through(function (chunk, enc, cb) {
    this.push(JSON.stringify(chunk) + '\n')
    cb()
  })

  socket.pipe(parse)
  stringify.pipe(socket)

  var adapter = duplexify(stringify, parse)
  adapter.on('pipe', function (dest) {
    dest.write({type:'DEFAULT'})
  })
  return adapter
}
