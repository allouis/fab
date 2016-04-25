var bel = require('bel')

module.exports = TodoItemComponent
function TodoItemComponent (state, dispatch) {
	var completed = state.completed ? 'completed' : ''
	var editing = state.editing ? 'editing': ''
	function setCompleted (event) {
		dispatch({
			type: 'TODO_COMPLETED',
			id: state.id,
			completed: !!event.target.checked
		})
	}
	function setEditing (event) {
		dispatch({
			type: 'TODO_EDIT',
			id: state.id
		})
	}
	function updateText (event) {
		var content = event.target.value.trim()
		if (!content) return destroyTodo()
		dispatch({
			type: 'TODO_UPDATE',
			id: state.id,
			title: content
		})
	}
	function destroyTodo () {
		dispatch({
			type: 'TODO_DESTROY',
			id: state.id
		})
	}
	return bel`
		<li class="${completed} ${editing}">
			<div class="view ${completed}">
				<input onchange=${setCompleted} class="toggle" type="checkbox" ${completed ? 'checked': ''}></input>
				<label ondblclick=${setEditing}>${state.title}</label>
				<button onclick=${destroyTodo} class="destroy"></button>
			</div>
			<input onblur=${updateText} class="edit" value="${state.title}" ${editing ? 'autofocus' : ''}></input>
		</li>`
}
