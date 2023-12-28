import React from 'react';

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }
    return(
        <button 
            className='mt-4 rounded-full w-14 h-14 font-extrabold text-4xl absolute -bottom-5 -right-5 text-white bg-purple-800'
            onClick={ () => onClickButton()}
        >
            +
        </button>
    );
}
export { CreateTodoButton };