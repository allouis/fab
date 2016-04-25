var test = require('tape')
var bel = require('bel')
var morphdom = require('morphdom')
var copyEvents = require('./')

var opts = {
  onBeforeMorphEl: copyEvents
}

test('event attribute gets updated', function (t) {
  t.plan(2)
  function a () { t.ok(true, 'called a') }
  function b () { t.ok(true, 'called b') }
  var el = bel`<button onclick=${a}>hi</button>`
  el.click()
  morphdom(el, bel`<button onclick=${b}>hi</button>`, opts)
  el.click()
})

test('event attribute gets removed', function (t) {
  t.plan(1)
  function a () { t.ok(true, 'called a') }
  var el = bel`<button onclick=${a}>hi</button>`
  el.click()
  morphdom(el, bel`<button>hi</button>`, opts)
  el.click()
})

test('custom event listeners and properties are ignored', function (t) {
  t.plan(3)
  function a () { t.ok(true, 'called a') }
  function b () { t.ok(true, 'called b') }
  function c () { t.notOk(true, 'should not call c') }
  var el = bel`<button onclick=${a}>hi</button>`
  el.click()
  var newEl = bel`<button onclick=${b}>hi</button>`
  newEl.foo = 999
  newEl.addEventListener('foobar', c)
  morphdom(el, newEl, opts)
  t.equal(el.foo, undefined, 'no el.foo')
  el.dispatchEvent(new Event('foobar'))
  el.click()
})
