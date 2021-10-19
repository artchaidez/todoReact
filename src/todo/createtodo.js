import React, { useState, useContext } from 'react';
import { StateContext } from '../Contexts';

// NOTE: not working

export default function CreateTodo () {

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');

    const {state, dispatch} = useContext(StateContext);
    const {user} = state;

    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleDescription (evt) { setDescription(evt.target.value) }

    // could be i need to use state, not user?
    return (
    <form onSubmit={e => { e.preventDefault(); dispatch({type: "CREATE_TODO", title, description, author: state}); }}>
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