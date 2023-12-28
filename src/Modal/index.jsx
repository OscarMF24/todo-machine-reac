import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='absolute inset-0 flex justify-center items-center w-full h-full bg-black/50'>
            <section className='card p-6 w-96 drop-shadow-md'>
                <h3 className='text-3xl font-black'>
                    Create new task
                </h3>
                {children}
            </section>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };