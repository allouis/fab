var bel = require('bel')

module.exports = ClearCompletedButtonComponent
function ClearCompletedButtonComponent (state, dispatch) {
	function clearCompleted () {
		dispatch({
			type: 'CLEAR_COMPLETED'
		})
	}
	return bel`
		<button onclick=${clearCompleted} class="clear-completed">Clear completed</button>
	`
}
