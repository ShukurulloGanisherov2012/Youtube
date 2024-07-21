import React, { useState } from 'react'
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState([])
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm){
            navigate(`/main/search/${searchTerm}`);
            setSearchTerm('')
        }
    }
    return (
        <form onSubmit={handleSubmit} className="group dark:border border-[1px] border-black flex items-center flex-row-reverse px-2 rounded-md z-10 bg-white">
            <Button onClick={handleSubmit} className='flex items-center justify-center bg-black h-[32px] px-2 rounded-md'>
                <svg className='w-5 h-4 text-cherry' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21L15.803 15.803M15.803 15.803A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </Button>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" id='input' className='text-md text-black px-3 py-2 border-none outline-none z-20' placeholder='Search...' />
        </form>
    )
}
