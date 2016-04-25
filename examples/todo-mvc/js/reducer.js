module.exports = reducer

function id(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,id)}

function reducer (state, action) {
	switch (action.type) {
		case 'NEW_TODO':
			return state.concat({
				title: action.title,
				id: id()
			})

		case 'TODO_COMPLETED':
			return state.map(function (todo) {
				if (todo.id === action.id) todo.completed = action.completed
				return todo
			})

		case 'TODO_EDIT':
			return state.map(function (todo) {
				if (todo.id === action.id) todo.editing = true
				return todo
			})

		case 'TODO_UPDATE':
			return state.map(function (todo) {
				if (todo.id === action.id) {
					todo.editing = false
					todo.title = action.title
				}
				return todo
			})

		case 'TODO_DESTROY':
			return state.filter(function (todo) {
				return todo.id !== action.id
			})

		case 'TODO_ALL_COMPLETED':
			return state.map(function (todo) {
				todo.completed = action.completed
				return todo
			})

		case 'CLEAR_COMPLETED':
			return state.filter(function (todo) {
				return !todo.completed
			})

		default:
			return state
	}
}
