"use client";
import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx'
const Header = () => {
    const [menuState, setMenuState] = useState(false)
    return (
        <div className="flex justify-end items-center lg:pt-5 p-2 w-[97%] mx-auto">
            <ul className="lg:flex gap-10 hidden">
                <li className="hover:text-amber-600 text-amber-600 border-b pb-1 border-amber-600 duration-300 cursor-pointer hover:font-semibold">Home</li>
                <li className="hover:text-amber-600 hover:border-b-2 pb-1 hover:border-amber-600 duration-300 cursor-pointer hover:font-semibold">About</li>
                <li className="hover:text-amber-600 hover:border-b-2 pb-1 hover:border-amber-600 duration-300 cursor-pointer hover:font-semibold">Services</li>
                <li className="hover:text-amber-600 hover:border-b-2 pb-1 hover:border-amber-600 duration-300 cursor-pointer hover:font-semibold">Blog</li>
                <li className="hover:text-amber-600 hover:border-b-2 pb-1 hover:border-amber-600 duration-300 cursor-pointer hover:font-semibold">Contact</li>
            </ul>
            <div onClick={() => setMenuState(!menuState)} className='lg:hidden block'>
                {
                    menuState ? <RxCross2 className='text-2xl font-light text-gray-700' /> : <HiOutlineMenu className='text-2xl font-light text-gray-700' />
                }
            </div>
            <div className={`w-[25%] bg-gray-100 p-2 rounded-md absolute top-9 right-3 ${!menuState && 'hidden'} duration-300 lg:hidden block `}>
                <ul>
                    <li className='hover:text-amber-400 text-gray-700 text-right border-b border-gray-500'>Home</li> 
                    <li className='hover:text-amber-400 text-gray-700 text-right border-b border-gray-500'>About</li> 
                    <li className='hover:text-amber-400 text-gray-700 text-right border-b border-gray-500'>Services</li> 
                    <li className='hover:text-amber-400 text-gray-700 text-right border-b border-gray-500'>Blog</li> 
                    <li className='hover:text-amber-400 text-gray-700 text-right border-b border-gray-500'>Contact</li> 
                </ul>
            </div>
        </div>
    );
};

export default Header;