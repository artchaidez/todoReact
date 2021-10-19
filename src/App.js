import UserBar from './user/Userbar';
import React, { useReducer } from 'react'
import appReducer from './Reducers';

import { StateContext } from './Contexts';

function App() {

  const initialTodos = [
    {
        title: "Buy Milk", 
        author: "Paul",
        complete: false,
        completedOn: undefined
    },
    {
        title: "Buy new tires",
        description: "Buy name brand",
        author: "Paul",
        complete: false,
        completedOn: undefined
    }
]

  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: initialTodos })
  //const {user, posts} = state;
  //const [ user, dispatchUser ] = useReducer(userReducer, '')

  // Remove passing in user and dispatch for UserBar
  return (
    <div>
      <StateContext.Provider value={ {state: state, dispatch: dispatch} }>
      <UserBar />
      </StateContext.Provider>
    </div>
  )
}

export default App;
