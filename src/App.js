import UserBar from './user/userbar';
import Todo from './todo/todo';
import React, { useReducer } from 'react'

function App() {


  function userReducer (state, action) {
    switch (action.type) {
      case 'LOGIN':
      case 'REGISTER':
        return action.username
      case 'LOGOUT':return ''
      default:
        throw new Error()
    }
  }

  const [ user, dispatchUser ] = useReducer(userReducer, '')

  return (
    <div>
      <UserBar user= {user} dispatchUser = {dispatchUser}/>
    </div>
  )
}

export default App;
