import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import TodoList from '../todo/Todolist'

export default function Profile ( {userId} ) {

    const { state, dispatch } = useContext(StateContext)
    const [ todos, getTodos ] = useResource(() => ({
        url: `/users/${userId}`,
        method: 'get',
    }))

    useEffect(() =>{
        getTodos()
    }, [state.user.access_token])

    useEffect(() => {
    if (todos && todos.isLoading === false && todos.data) {
            dispatch({ type: 'FETCH_TODOS', todos: todos.data.todos })
        }
    }, [todos])

    const { data, isLoading } = todos;

    return (
        <>
          {isLoading && 'Todos loading...'} <TodoList />
        </>
    )
} 