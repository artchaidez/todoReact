import React, { useReducer } from 'react';
import Login from './login';
import Logout from './logout';
import Register from './register';
import CreateTodo from '../todo/createtodo';
import TodoList from '../todo/todolist';

export default function UserBar({user, dispatchUser}) {

    const initialTodos = [
        {
            title: "Buy Milk", 
        },
        {
            title: "Buy new tires",
            description: "Buy name brand"
        }
    ]

    // need TOGGLE_TODO and DELETE_TODO, check createtodo.js
    function todoReducer (state, action) {
        switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = { 
            title: action.title,
            description: action.description,
            author: action.author 
            }
            return [ newTodo, ...state ]
        default:
            throw new Error()
        }
    }

    const [ todos, dispatchTodos ] = useReducer(todoReducer, initialTodos)
   
    // NOTE: decide if <TodoList todo= {todos}/> goes first, or next line goes first
    if (user) {
        return (
            <>
            <Logout user={user} dispatchUser={dispatchUser} />
            <br/><br/><hr/><br/>
            {user && <CreateTodo user={user} dispatch={dispatchTodos} />}
            <TodoList todo= {todos}/>
            </>
        )
    } else {
        return (
        <>
            <h3>Sign in</h3>
            <Login dispatchUser={dispatchUser}/>
            <h3>Sign up</h3>
            <Register dispatchUser={dispatchUser} />
            <br/><br/><hr/><br/>
            </>
        )
    }
}