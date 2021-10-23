import React, { useReducer } from 'react'
import appReducer from './Reducers';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';
import { Container } from 'react-bootstrap';


import { StateContext } from './Contexts';
import CreateTodo from './todo/Createtodo';
import TodoPage from './pages/TodoPage';
import HeaderBar from './pages/HeaderBar';
import HomePage from './pages/HomePage';

function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] })

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/todo/create':route({ view: <CreateTodo /> }),
    '/todo/:id': route(req => {
        return { view: <TodoPage id={req.params.id} /> }
    }),
  })


  return (
    <div>
      <StateContext.Provider value={ {state: state, dispatch: dispatch} }>
      <Router routes={routes}>
        <Container>
                <HeaderBar/>
                <hr />
                <View />
        </Container>
      </Router>
      </StateContext.Provider>
    </div>
  )
}

export default App;
