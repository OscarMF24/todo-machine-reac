import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../Components/TodoForm';
import { TodosError } from '../Components/TodosError';
import { TodosLoading } from '../Components/TodosLoading';
import { EmptyTodos } from '../Components/EmptyTodos';

import ImgTodos from '../assets/img/img-todos.png'

function AppUI() {
    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,  
        setOpenModal 
    } = React.useContext(TodoContext);
    
    return(
        <React.Fragment>
            <div className='container mx-auto min-h-screen flex justify-center items-center gap-24'>
                <img className='w-[600px]' src={ ImgTodos } alt="" />
                <section className='text-center flex flex-col items-center'>
                    <h1 className='text-6xl font-black text-white'>Your tasks</h1>
                    <TodoCounter />
                    <TodoSearch />
                    <div className='card relative w-96 mt-4 p-4'>
                        <TodoList>
                            { error && <TodosError error={error} /> }
                            { loading && <TodosLoading /> }
                            { (!loading && !searchedTodos.length) && <EmptyTodos /> }

                            {searchedTodos.map(todo => (
                                <TodoItem 
                                    key = {todo.text}
                                    text = {todo.text}
                                    completed = {todo.completed}
                                    onCompleted = {() => completeTodo(todo.text)}
                                    onDeleted = {() => deleteTodo(todo.text)}
                                />
                            ))}
                        </TodoList>
                        <CreateTodoButton 
                            setOpenModal = {setOpenModal}
                        />
                    </div>
                </section>
                { !!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )};
            </div>
        </React.Fragment>
    );
}
export { AppUI };
