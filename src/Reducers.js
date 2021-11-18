function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return {
                'username': action.username,
                'access_token': action.access_token
            }
        case 'LOGOUT':
            return {
                'username': undefined,
                'access_token': undefined
            }
        case 'GETUSERS':
            return action.users
        default:
            return state
    }
}
// could also creates a function for 'GETUSERS' instead of putting it in userReducer


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
                console.log(action.todoId + "," + p._id);
                if(p._id === action.todoId) {
                    console.log(p._id);
                    p.complete = action.complete;
                    p.completedOn = action.completedOn;
                }
                return p;
            })
        case 'DELETE_TODO':
            return state.filter((p) => p._id !== action.todoId)
        case 'FETCH_TODOS':
            return action.todos
        default:
            return state;
    }
}
// could also creates a function for 'GETUSERS' instead of putting it in userReducer
export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        users: userReducer(state.users, action),
        todos: todosReducer(state.todos, action)
    }
}