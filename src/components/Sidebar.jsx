import { Button } from '@material-tailwind/react'
import React from 'react'
import { categories } from '../utils/constant'

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
    console.log(selectedCategory)
    return (
        <div className='dark:bg-black bg-white md:w-52 max-h-[90vh] overflow-auto py-2 px-4 relative'>
            <div className='flex md:flex-col flex-row gap-5'>
                {
                    categories.map(btn => (
                        <Button
                            key={btn.name}
                            onClick={() => setSelectedCategory(btn.name)}
                            className={`${selectedCategory === btn.name ? 'group w-full cursor-pointer min-w-[155px] bg-transparent h-[45px] capitalize text-[15px] bg-cherry rounded-full flex items-center gap-3 py-3' : 'group w-full min-w-[155px] bg-transparent h-[45px] capitalize text-[15px] hover:bg-cherry rounded-full flex items-center gap-3 py-3 cursor-pointer'}`}
                        >
                            <div className={`${selectedCategory === btn.name ? 'text-white' : 'text-cherry'} transition-all duration-300 group-hover:text-white `}>
                                {btn.icon}
                            </div>
                            <span className='dark:text-white text-blue-800'>{btn.name}</span>
                        </Button>
                    ))
                }
            </div>
            <div className=' bg-transparent w-full mt-4 text-center p-2'>
                <h1 className='text-[13px] md:block hidden'>Copyright &copy; Shukurullo</h1>
            </div>
        </div>
    )
}
