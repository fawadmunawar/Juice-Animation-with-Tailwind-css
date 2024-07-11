import React from 'react';
import main_logo from './Logo.png';

export const Navbar = () => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center my-4 md:my-10 px-4 md:px-20'>
      <div className='mb-4 md:mb-0'>
        <img src={main_logo} alt='main logo' onClick={reload} className='cursor-pointer w-32 md:w-48' />
      </div>
      <div className='flex flex-wrap justify-center gap-4 md:gap-6 text-white mb-4 md:mb-0'>
        <h3 className='cursor-pointer text-sm md:text-base lg:text-xl'>FLAVORS</h3>
        <h3 className='cursor-pointer text-sm md:text-base lg:text-xl'>FIND US</h3>
        <h3 className='cursor-pointer text-sm md:text-base lg:text-xl'>ABOUT US</h3>
        <h3 className='cursor-pointer text-sm md:text-base lg:text-xl'>FRANCHISE</h3>
      </div>
      <div>
        <button className='py-2 px-6 md:py-2.5 md:px-10 text-white bg-transparent border border-white border-solid'>
          Online store
        </button>
      </div>
    </div>
  );
};
