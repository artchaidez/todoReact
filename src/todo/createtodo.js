import React, { useState } from 'react';

export default function CreateTodo ({user, todos, setTodos}) {

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');

    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleDescription (evt) { setDescription(evt.target.value) }
    function handleCreate () {     
        const newTodo = { title, description, author: user }
        setTodos([ newTodo, ...todos ])
    }

    return (
    <form onSubmit={e => { e.preventDefault(); handleCreate(); } }>
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