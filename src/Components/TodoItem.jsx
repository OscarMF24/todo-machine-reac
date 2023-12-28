import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

function TodoItem(props) {
    return(
        <li className='card flex items-center gap-4 p-4 my-6'>
            <span
                onClick={props.onCompleted} 
            >
                <CheckCircleIcon className={`w-6 h-6 opacity-100 stroke-3 ${props.completed ? 'text-emerald-600' : 'text-gray-300'}`}/>
            </span>
            <p className={`w-full ${props.completed && 'line-through'}`}>
                {props.text}
            </p>
            <span
                onClick={props.onDeleted}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };