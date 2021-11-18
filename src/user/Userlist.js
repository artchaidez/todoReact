import React, {useContext} from 'react'
import User from './User';

import { StateContext } from '../Contexts';

export default function Userlist () {
    const {state} = useContext(StateContext);
    const {users} = state;

    return (
        <div>
            {users.map((p,i) => <User {...p} user={p} id={p._id} key={'user-' + i}/>)}
        </div> 
    )
}