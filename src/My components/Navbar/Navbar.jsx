import React from 'react'
import main_logo from "./Logo.png"

export const Navbar = () => {
  const reload = () => {
    window.location.reload()
}
  return (
    <div className='flex justify-around items-center my-10'>
        <div>
            <img src={ main_logo } alt="main logo" onClick={reload} className='cursor-pointer'/>
        </div>
        <div className='flex gap-6 text-white'>
            <h3 className='cursor-pointer text-xl'>FLAVORS</h3>
            <h3 className='cursor-pointer text-xl'>FIND US</h3>
            <h3 className='cursor-pointer text-xl'>ABOUT US</h3>
            <h3 className='cursor-pointer text-xl'>FRANCISE</h3>
        </div>
        <div>
            <button className='py-2.5 px-10 text-white bg-transparent border border-white border-solid'>Online store</button>
        </div>
    </div>
  )
}
