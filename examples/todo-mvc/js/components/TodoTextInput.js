var bel = require('bel')

module.exports = TodoTextInputComponent
function TodoTextInputComponent (state, dispatch) {
	function createTodo (text) {
		var content = text.trim()
		if (!content) return
		dispatch({
			type: 'NEW_TODO',
			title: content
		})
	}
	var autofocus = state.length ? '' : 'autofocus'

	var el = bel`
		<input class="new-todo" placeholder="What needs to be done?" ${autofocus}>
	`
	el.addEventListener('keydown', function (event) {
		if (event.keyCode === 13) createTodo(event.target.value)
	})

	return el
}
