var bel = require('bel')
var TodoTextInput = require('./TodoTextInput')

module.exports = HeaderComponent
function HeaderComponent (state, dispatch) {
	return bel`
		<header class="header">
			<h1>todos</h1>
			${TodoTextInput(state, dispatch)}
		</header>
	`
}
