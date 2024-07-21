import { Button, IconButton } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { FaSun } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AppLayoutContext } from '../layouts/AppLayout';


export default function Navbar() {
    const { theme, toogleTheme } = useContext(AppLayoutContext)


    return (
        <div className='dark:bg-black dark:shadow-none shadow-md shadow-gray-300 bg-white text-white py-1 px-8 flex items-center justify-between'>
            <Link to='/main'>
                <img className='sm:block hidden h-12' src="https://i.ibb.co/s9Qys2j/logo.png" alt="Logo" />
            </Link>
            <div className='flex items-center gap-3'>
                <IconButton onClick={toogleTheme} className='dark:bg-[#282828] bg-[#dbf3fa] flex items-center justify-center p-0'>
                    { theme == 'dark' ? <BsFillMoonStarsFill className='size-5 text-white' /> : <FaSun className='size-5 text-yellow-600' /> }
                </IconButton>
                <SearchBar />
            </div>
        </div>
    );
}