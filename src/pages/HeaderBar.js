import React, { useContext } from 'react'
import CreateTodo from '../todo/Createtodo'
import UserBar from '../user/Userbar'
import Header from '../Header'
import { StateContext } from '../Contexts'

export default function HeaderBar () {
    
    const {state} = useContext(StateContext)
    const {user} = state;
    
    return (
    <>
        <Header text="My Blog" />
            <React.Suspense fallback={"Loading..."}>
            <UserBar />
            </React.Suspense> <br /><br />
            {user && <CreateTodo />}<br />
    </>
    )
}
