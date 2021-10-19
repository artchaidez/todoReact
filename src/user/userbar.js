import React, { useReducer } from 'react';
import Login from './login';
import Logout from './logout';
import Register from './register';
import CreateTodo from '../todo/createtodo';
import TodoList from '../todo/todolist';

export default function UserBar({user, dispatchUser}) {

    //add author?
    const initialTodos = [
        {
            title: "Buy Milk", 
            author: "Paul",
            complete: false,
            completedOn: undefined
        },
        {
            title: "Buy new tires",
            description: "Buy name brand",
            author: "Paul",
            complete: false,
            completedOn: undefined
        }
    ]

    // optional: TOGGLE_TODO and DELETE_TODO, check createtodo.js
    function todoReducer (state, action) {
        switch (action.type) {
        case 'CREATE_TODO':
            const newTodo = { 
            title: action.title,
            description: action.description,
            author: action.author, 
            complete: false,
            completedOn: undefined
            }
            return [ newTodo, ...state ]
        case 'TOGGLE_POST':
            return state.map((p, i) => {
                if(i === action.postId) {
                    p.complete = action.complete;
                    p.completedOn = Date.now();
                    console.log(p)
                }
                return p;
            })
        case 'DELETE_POST':
            return state.filter((p,i) => i !== action.postId)
        default:
            throw state;
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
            <TodoList todo= {todos} dispatch={dispatchTodos}/>
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