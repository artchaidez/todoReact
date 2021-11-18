import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import Userlist from '../user/Userlist';

export default function UsersPage () {

    const { state, dispatch } = useContext(StateContext)
    const [ users, getUsers ] = useResource(() => ({
        url: '/users',
        method: 'get',
    }))

    useEffect(() =>{
        getUsers()
    }, [])

    useEffect(() => {
    if (users && users.isLoading === false && users.data) {
            dispatch({ type: 'GETUSERS', users: users.data.users })
        }
    }, [users])

    const { data, isLoading } = users;

    return (
        <>
          {isLoading && 'Loading Users...'} <Userlist/>
        </>
    )
} 
