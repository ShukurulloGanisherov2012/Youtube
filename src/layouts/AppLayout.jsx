import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
export const AppLayoutContext = createContext();
export default function AppLayout() {
    const [theme, setTheme] = useState(localStorage.getItem('youtube_theme') || 'light')
    
    useEffect(() => {
        localStorage.setItem('youtube_theme', theme);
        if(theme == 'dark') {
            document.body.classList.add('dark')
        }else {
            document.body.classList.remove('dark')
        }
    }, [theme])
    const toogleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <AppLayoutContext.Provider value={{ theme, toogleTheme }}>
            <Outlet />
        </AppLayoutContext.Provider>
    )
}
