import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    
    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form className="mt-5" 
            onSubmit={onSubmit}
        >
            <label>
                <span className='font-medium'>Task Name</span>
                <textarea name="" id="" rows="10" className='w-full rounded-md p-3 mt-1 bg-slate-200 focus:outline-none'
                    value={ newTodoValue }
                    onChange={ onChange } 
                ></textarea>
            </label>
            <div className="mt-5 flex justify-between">
                <button className="py-3 px-4 bg-red-700 text-white font-medium rounded-md"
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button className="py-3 px-4 text-white font-medium bg-purple-800 rounded-md"
                    type="submit"
                >
                    Add Task
                </button>
            </div>
        </form>
    );
}

export { TodoForm }