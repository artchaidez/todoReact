import React from 'react';

export default function CreateTodo ({user}) {
    return (
    <form onSubmit={e => e.preventDefault()}>
        <div>Author: <b>{user}</b></div>
        <div>
            <label htmlFor="create-title">Title: </label>
            <input type="text" name="create-title" id="create-title" />
        </div>
        <div>
            <label htmlFor="create-description">Description: </label>
            <input type="text" name="description" id="description" />
        </div>
        <input type="submit" value="Create Todo" />
        </form>    
    )
}