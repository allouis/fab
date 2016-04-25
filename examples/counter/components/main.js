var bel = require('bel')
var counter = require('./counter')

module.exports = mainComponent

function mainComponent (state, dispatch) {
  return bel`
    <div>
      <h1> Hello, ${state.name} </h1>
      <section>
        ${counter(state, dispatch)}
      </section>
    </div>
  `
}
