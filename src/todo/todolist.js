import React from 'react'
import Todo from './Todo';

import { StateContext } from '../Contexts';
import { useContext } from 'react/cjs/react.development'

// Does not work

export default function TodoList () {
    const {state} = useContext(StateContext)
    const {todo} = state;

    return (
        <div>
            {todo.map((p, i) => <Todo {...p} title={p.title} author={p.author}  key={'todo-' + i} postId={i} />)}
        </div> 
    )
}