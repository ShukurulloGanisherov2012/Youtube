import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'

export default function MainLayout() {
    return (
        <div className='min-h-screen dark:bg-black bg-white'>
            <Navbar/>
            <Outlet />
        </div>
    )
}
