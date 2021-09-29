import React, { useState } from 'react';

export default function Login({ dispatchUser }) {

    const [ username, setUsername ] = useState('')
    
    function handleUsername (evt) { setUsername(evt.target.value) }

    // pass in LOGIN type, and data username
    return (
    <form onSubmit={e => { e.preventDefault(); dispatchUser({ type: 'LOGIN', username }); }}>
        <label htmlFor="login-username">Username:</label>
        <input type="text" value={username} onChange={handleUsername} name="login-username" id="login-username" />

        <label htmlFor="login-password">Password:</label>
        <input type="password" name="login-password" id="login-password" />
        
        <input type="submit" value="Login" disabled={username.length === 0} /></form>
    )
}