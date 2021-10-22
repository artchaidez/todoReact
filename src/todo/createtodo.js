import React, { useState, useContext, useEffect } from 'react';
import { StateContext } from '../Contexts';
import { useResource } from 'react-request-hook';

export default function CreateTodo () {

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');

    const [ todos , createTodo ] = useResource(({ title, description, author }) => ({
        url: '/todos',
        method: 'post',
        data: { title, description, author }
    }))

    const {state, dispatch} = useContext(StateContext);
    const {user} = state;

    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleDescription (evt) { setDescription(evt.target.value) }

    function handleCreate () {
        createTodo({ title, description, author: user })
    }

    useEffect(() => {
        if (todos && todos.data) {
            dispatch({ type: 'CREATE_TODO', title: todos.data.title, description: todos.data.description, id: todos.data.id,  author: user })
        }
      }, [todos])

    return (
    <form onSubmit={e => { e.preventDefault(); handleCreate(); }}>
        <div>Author: <b>{user}</b></div>
        <div>
            <label htmlFor="create-title">Title: </label>
            <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
        </div>
        <div>
            <label htmlFor="description">Description: </label>
            <input type="text" value={description} onChange={handleDescription} name="description" id="description" />
        </div>
        <input type="submit" value="Create Todo" />
        </form>    
    )
}