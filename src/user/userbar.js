import React, { useState } from 'react';
import Login from './login';
import Logout from './logout';
import Register from './register';
import CreateTodo from '../todo/createtodo';
import TodoList from '../todo/todolist';

export default function UserBar({user, setUser}) {

    const initialTodos = [
        {
            title: "Buy Milk", 
        },
        {
            title: "Buy new tires",
            description: "Buy name brand"
        }
    ]

    const [ todos, setTodos ] = useState(initialTodos)
   
    // NOTE: decide if <TodoList todo= {todos}/> goes first, or next line goes first
    if (user) {
        return (
            <>
            <Logout user={user} setUser={setUser} />
            <br/><br/><hr/><br/>
            {user && <CreateTodo user={user} todos={todos} setTodos={setTodos} />}
            <TodoList todo= {todos}/>
            </>
        )
    } else {
        return (
        <>
            <h3>Sign in</h3>
            <Login setUser={setUser} />
            <h3>Sign up</h3>
            <Register setUser={setUser} />
            <br/><br/><hr/><br/>
            </>
        )
    }
}