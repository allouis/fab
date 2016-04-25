var bel = require('bel')
var TodoItem = require('./TodoItem')
var Footer = require('./Footer')

module.exports = MainSectionComponent
function MainSectionComponent (state, dispatch) {
  if (!state.length) return
	return bel`
		<section class="main">
			<input onchange=${setAllCompleted(dispatch)} class="toggle-all" type="checkbox" ${getChecked(state)}></input>
			<ul class="todo-list">
				${state.map(todo =>
					TodoItem(todo, dispatch)
				)}
			</ul>
			${Footer(state, dispatch)}
		</section>
	`
}

function getChecked (state) {
	return state.reduce(function (checked, todo) {
		if (!checked) return false
		return todo.completed
	}, true) ? 'checked' : ''
}

function setAllCompleted (dispatch) {
  return function (event) {
    dispatch({
      type: 'TODO_ALL_COMPLETED',
      completed: event.target.checked
    })
  }
}
