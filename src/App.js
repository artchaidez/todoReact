import UserBar from './user/Userbar';
import React, { useReducer, useEffect } from 'react'
import appReducer from './Reducers';
import { useResource } from 'react-request-hook'
import Header from './Header';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';


import { StateContext } from './Contexts';
import CreateTodo from './todo/Createtodo';
import PostPage from './pages/PostPage';
import HeaderBar from './pages/HeaderBar';
import HomePage from './pages/HomePage';

function App() {

  /*
  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  })) */

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] })
  /*
  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
        dispatch({ type: 'FETCH_TODOS', todos: todos.data })
    }
  }, [todos]) */

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/todo/create':route({ view: <CreateTodo /> }),
    '/todo/:id': route(req => {
        return { view: <PostPage id={req.params.id} /> }
    }),
  })


  return (
    <div>
      <StateContext.Provider value={ {state: state, dispatch: dispatch} }>
      <Router routes={routes}>
            <div style={{ padding: 8 }}>
                <HeaderBar/>
                <hr />
                <View />
            </div>
            </Router>
      </StateContext.Provider>
    </div>
  )
}

export default App;

/* <Header text="My Todolist" />
        <React.Suspense fallback={"Loading..."}>
        <UserBar />
        </React.Suspense>*/
