var bel = require('bel')

module.exports = counter

function counter (state, dispatch) {
  function inc () {
    dispatch({ type: 'inc' })
  }
  return bel`
    <div>
      <p> The button has been clicked ${state.count} times </p>
      <button onclick=${inc} type="button"> Click me </button>
    </div>
  `
}
