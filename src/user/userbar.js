import React from 'react';
import Login from './login';
import Logout from './logout';
import Register from './register';
import CreateTodo from '../todo/createtodo';

// this handles if site shows logout or show login/register

export default function UserBar() {
    // Logout will appear if user != ''
    const user = '';
    
    if (user) {
        return (
            <>
            <Logout user={user} />
            <CreateTodo user={user} />
            </>
        )
    } else {
        return (
        <>
            <Login />
            <Register />
            </>
        )
    }
}