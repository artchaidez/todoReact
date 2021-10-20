import React, { useContext} from 'react';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import CreateTodo from '../todo/Createtodo';
import TodoList from '../todo/Todolist';
import { StateContext } from '../Contexts';

export default function UserBar() {

    const {state} = useContext(StateContext);
    const {user} = state;
   
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