import React from 'react'
import Todo from './todo';

export default function TodoList ({todo = [], dispatch}) {
    return (
        <div>
            {todo.map((p, i) => <Todo {...p} title={p.title} author={p.author}  key={'todo-' + i} dispatch={dispatch} postId={i} />)}
        </div> 
    )
}