/* eslint-disable no-unused-vars */
import { School } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 after:z-10'>
   <div className='md:flex max-w-7xl mx-auto hidden justify-between items-center gap-10 h-full'>
   <div className='flex gap-2 items-center'>
   <School size ={"30"}/>
    <h1 className='hidden md:block font-extrabold text-2xl'>E-Learning</h1>
        
   </div>
   </div>
        </div>
  )
}

export default Navbar;