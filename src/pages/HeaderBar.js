import React, { useContext } from 'react'
import CreateTodo from '../todo/Createtodo'
import UserBar from '../user/Userbar'
import Header from '../Header'
import { StateContext } from '../Contexts'
import { Link } from 'react-navi';

export default function HeaderBar () {
    
    const {state} = useContext(StateContext)
    const {user} = state;
    
    return (
    <>
        <Header text="My Todo List" />
            <React.Suspense fallback={"Loading..."}>
            <UserBar />
            </React.Suspense> <br /><br />
            {user && <Link href="/todo/create">Create New Todo</Link> }
    </>
    )
}
