import React, { useEffect } from 'react';
import { useResource } from 'react-request-hook';
import { Link } from 'react-navi';

import Todo from '../todo/Todo'

// TODO: Rename PostPage to TodoPage

export default function PostPage ({ id }) {

    const [ todos, getTodos ] = useResource(() => ({
        url: `/todos/${id}`,
        method: 'get'
    }))

    useEffect(getTodos, [id])

    return (
        <div>
            {(todos && todos.data)
                ? <Todo {...todos.data} />
                : 'Loading...'
            }
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}
