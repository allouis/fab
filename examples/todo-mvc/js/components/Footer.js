var bel = require('bel')
var ClearCompletedButton = require('./ClearCompletedButton')

module.exports = footer
function footer (state, dispatch) {
	var itemText = 'item' + (state.length === 1 ? '' : 's')
	var showClearComplete = state.some(todo => todo.completed)

	return bel`
		<footer class="footer">
			<span class="todo-count"><strong>${state.length}</strong> ${itemText} left</span>
			<ul class="filters">
				<li>
					<a class="selected" href="#/">All</a>
				</li>
				<li>
					<a href="#/active">Active</a>
				</li>
				<li>
					<a href="#/completed">Completed</a>
				</li>
			</ul>
			${showClearComplete ? ClearCompletedButton(state, dispatch) : ''}
		</footer>
	`
}
