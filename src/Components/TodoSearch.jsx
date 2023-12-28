import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const { 
        searchValue, 
        setSearchValue 
    } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <div className='relative mt-10 w-96'>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input 
                type="search" 
                className='w-full rounded-md py-3 pl-10 px-3' 
                placeholder='Search' 
                value={searchValue}
                onChange={onSearchValueChange}

            />
        </div>
    );
}

export { TodoSearch };