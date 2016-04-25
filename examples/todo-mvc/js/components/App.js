var bel = require('bel')
var Header = require('./Header')
var MainSection = require('./MainSection')

module.exports = AppComponent

function AppComponent (state, dispatch) {
	return bel`
		<section class="todoapp">
			${Header(state, dispatch)}
			${MainSection(state, dispatch)}
		</section>
	`
}
