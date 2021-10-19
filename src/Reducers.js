function userReducer (state, action) {
    switch (action.type) {
      case 'LOGIN':
      case 'REGISTER':
        return action.username
      case 'LOGOUT':return ''
      default:
        throw state
    }
}

  function todosReducer (state, action) {
    switch (action.type) {
    case 'CREATE_TODO':
        const newTodo = { 
        title: action.title,
        description: action.description,
        author: action.author, 
        complete: false,
        completedOn: undefined
        }
        return [ newTodo, ...state ]
    case 'TOGGLE_POST':
        return state.map((p, i) => {
            if(i === action.postId) {
                p.complete = action.complete;
                p.completedOn = Date.now();
                console.log(p)
            }
            return p;
        })
    case 'DELETE_POST':
        return state.filter((p,i) => i !== action.postId)
    default:
        throw state;
    }
}

// state.todo or state.todos?
export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        posts: todosReducer(state.todos, action)
    }
}