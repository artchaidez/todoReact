import UserBar from './user/Userbar';
import Todo from './todo/Todo';
import React, { useReducer } from 'react'

import { StateContext } from './Contexts';

function App() {

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

  const [ user, dispatchUser ] = useReducer(userReducer, '')

  // Remove passing in user and dispatch for UserBar
  return (
    <div>
      <StateContext.Provider value={ {state: user, dispatch: dispatchUser} }>
      <UserBar />
      </StateContext.Provider>
    </div>
  )
}

export default App;
