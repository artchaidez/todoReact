import React, { useContext } from 'react';
import { StateContext } from '../Contexts';

export default function Logout() {

    const {state, dispatch} = useContext(StateContext);
    // could also destructure it further, then use user as seen below:
    const {user} = state;

    return (
    <form onSubmit={e => { e.preventDefault(); dispatch({ type: 'LOGOUT'}); }}>
        Logged in as: <b>{user}</b>
        <input type="submit" value="Logout" /></form>
    )
}