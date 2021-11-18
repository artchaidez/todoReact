import React, { useContext, useEffect } from 'react';
import { StateContext } from '../Contexts';
import { Link } from 'react-navi'
import { Card, Button } from 'react-bootstrap'
import { useResource } from 'react-request-hook';

function Todo ({ title , description, author, complete, completedOn, todoId, short = false}) {

    const {state, dispatch} = useContext(StateContext);
    const {user} = state;

    const [deletedTodo, deleteTodo] = useResource((todoId) => ({
        url: `/todo/${todoId}`,
        method: "delete",
        headers: {"Authorization": `${state.user.access_token}`},
    }));

    const [toggledTodo, toggleTodo] = useResource((todoId, complete) => ({
        url: `/todo/${todoId}`,
        method: "put",
        headers: {"Authorization": `${state.user.access_token}`},
        data: {
            complete: !complete,
            completedOn: Date.now()
        }
    }));

    useEffect(() => {
        if (deletedTodo && deletedTodo.data && deletedTodo.isLoading === false) {
            dispatch({type: 'DELETE_TODO', todoId: deletedTodo.data._id})
        }
    }, [deletedTodo])

    useEffect(() => {
        if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) {
            dispatch({type: 'TOGGLE_TODO', complete: toggledTodo.data.complete, completedOn: toggledTodo.data.completedOn, todoId: toggledTodo.data._id})
        }
    }, [toggledTodo])

    let processedDescription = description
    
    if (short) {
        if (description.length > 30) {
            processedDescription = description.substring(0, 30) + '...'
        }
    }

    return (
        <Card>
          <Card.Body>
              <Card.Title><Link  href={`/todo/${todoId}`}>{title}</Link>
              </Card.Title>
              <Card.Subtitle>
              <i>Written by <b>{user.username}</b></i>
              </Card.Subtitle>
              <Card.Text>
                  {processedDescription}
              </Card.Text>

              <input type="checkbox" checked={complete} onChange={e => {toggleTodo(todoId, e.target.checked)}} />
              <Button variant="link" onClick={(e) => {deleteTodo(todoId)}}>Delete Todo</Button>
              {complete && <i>Completed on: {new Date(completedOn).toLocaleDateString('en-us')}</i>}
              {short && <Link href={`/todo/${todoId}`}>View full Todo </Link>}

          </Card.Body>
          </Card>

    )
}

export default React.memo(Todo);
