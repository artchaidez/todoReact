import React from 'react';
import Login from './login';
import Logout from './logout';
import Register from './register';
import CreateTodo from '../todo/createtodo';
import TodoList from '../todo/todolist';

export default function UserBar() {

    // Logout will appear if user != ''
    const user = '';
    const post = [
        {
            title: "Buy Milk", 
        },
        {
            title: "Buy new tires",
            description: "Buy name brand"
        }
    ]
    
    if (user) {
        return (
            <>
            <Logout user={user} />
            <TodoList todo= {post}/>
            <CreateTodo user={user}/>
            <br/><br/><hr/><br/>
            </>
        )
    } else {
        return (
        <>
            <h3>Sign in</h3>
            <Login />
            <h3>Sign up</h3>
            <Register />
            <br/><br/><hr/><br/>
            </>
        )
    }
}