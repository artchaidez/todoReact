import React, { useContext, useReducer } from 'react';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import CreateTodo from '../todo/Createtodo';
import TodoList from '../todo/Todolist';
import { StateContext } from '../Contexts';

export default function UserBar() {

    const {state} = useContext(StateContext);
    const {user} = state;

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
   
    // Remove what is passed in for CreateTodo, TodoList, Logout, Login, Register
    if (user) {
        return (
            <>
            <Logout  />
            <br/><br/><hr/><br/>
            {user && <CreateTodo />}
            <TodoList />
            </>
        )
    } else {
        return (
        <>
            <h3>Sign in</h3>
            <Login />
            <h3>Sign up</h3>
            <Register  />
            <br/><br/><hr/><br/>
            </>
        )
    }
}