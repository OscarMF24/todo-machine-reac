import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);
    return(
        <h1 className='font-medium text-white'>
            Completed {completedTodos} to {totalTodos}
        </h1>
    );
}
export { TodoCounter };