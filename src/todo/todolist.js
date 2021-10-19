import React from 'react'
import Todo from './Todo';

export default function TodoList ({todo = [], dispatch}) {

    // update once Login works

    return (
        <div>
            {todo.map((p, i) => <Todo {...p} title={p.title} author={p.author}  key={'todo-' + i} dispatch={dispatch} postId={i} />)}
        </div> 
    )
}