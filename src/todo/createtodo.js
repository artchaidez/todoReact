import React, { useState } from 'react';

export default function CreateTodo ({user, dispatch}) {

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');

    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleDescription (evt) { setDescription(evt.target.value) }

    // // need TOGGLE_TODO and DELETE_TODO, check userbar.js
    return (
    <form onSubmit={e => { e.preventDefault(); dispatch({type: "CREATE_TODO", title, description, author: user}); }}>
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