import React, { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {

    
    const [todoId, setTodoId] = useState(1);
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todos, isLoading } = useGetTodoQuery(todoId);

    const prevButton = () => {
        if (todoId === 1) return;
        setTodoId( todoId - 1 )
    }

    const nextButton = () => {
        setTodoId( todoId + 1 )
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr/>
            <h4>isLoading...{ isLoading ? 'True' : 'False' }</h4>

            <pre>{ JSON.stringify(todos) }</pre>

            <button onClick={ prevButton }>
                Prev Todo
            </button>

            <button onClick={ nextButton }>
                Next Todo
            </button>

            {/* <ul>
                { todos.map( todo => (
                    <li 
                        key={ todo.id }
                    > 
                        <strong>{ todo.completed ? 'DONE' : 'Pending' }</strong> { todo.title }
                    </li>
                ))}
            </ul> */}

        </>
    )
}
