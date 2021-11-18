import React, {useContext} from 'react'
import Todo from './Todo';

import { StateContext } from '../Contexts';

export default function TodoList () {
    const {state} = useContext(StateContext);
    const {todos} = state;

    return (
        <div>
            {todos.map((p, i) => <Todo {...p}  short={true} title={p.title} author={p.author}  key={'todo-' + i} todoId={p._id} />)}
        </div> 
    )
}