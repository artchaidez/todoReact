import UserBar from './user/Userbar';
import React, { useReducer, useEffect } from 'react'
import appReducer from './Reducers';
import { useResource } from 'react-request-hook'

import { StateContext } from './Contexts';

function App() {

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] })
  
  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
        dispatch({ type: 'FETCH_TODOS', todos: todos.data })
    }
  }, [todos])


  return (
    <div>
      <StateContext.Provider value={ {state: state, dispatch: dispatch} }>
      <UserBar />
      </StateContext.Provider>
    </div>
  )
}

export default App;
