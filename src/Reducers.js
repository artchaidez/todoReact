function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state
    }
}

// NOTE: if not working, change postId to todoId
function todosReducer (state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = { 
            id: action.id,
            title: action.title,
            description: action.description,
            author: action.author, 
            complete: false,
            completedOn: undefined
            }
            return [ newTodo, ...state ]
        case 'TOGGLE_TODO':
            return state.map((p) => {
                if(p.i === action.todoId) {
                    p.complete = action.complete;
                    p.completedOn = action.completedOn;
                }
                return p;
            })
        case 'DELETE_TODO':
            return state.filter((p) => p.id !== action.todoId)
        case 'FETCH_TODOS':
            return action.todos
        default:
            return state;
    }
}

export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todosReducer(state.todos, action)
    }
}