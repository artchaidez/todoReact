import React from 'react'
import Todo from './todo';

export default function TodoList ({todo = []}) {
    return (
        <div>
            {todo.map((p, i) => <Todo {...p} key={'todo-' + i} />)}
        </div> 
    )
}