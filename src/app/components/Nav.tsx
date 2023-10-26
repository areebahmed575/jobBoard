'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import {RxCross2}from "react-icons/rx"
import Router from 'next/navigation';
import { useRouter } from 'next/router';
const Nav = () => {
    const [toggle,setToggle]=useState(true); 
    

  return (
    <div className='flex justify-between items-center absolute md:px-14 py-2 sm:py-5 w-full'>

<div className="text-white flex items-center space-x-3">
  <div className="rounded-full bg-violet-400 w-12 h-12 flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className="w-6 h-6 text-gray-900"
    >
      <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
    </svg>
  </div>
  <span className="self-center text-2xl font-semibold">CAREERS</span>
</div>
            <div className=''>
                <ul className='hidden  md:flex space-x-12 text-xl font-semibold'>
                <Link className="cursor-pointer" href="/"><li className='hover:scale-125 duration-200 pt-2 font-extrabold text-white'>Home</li></Link>
                <Link className="cursor-pointer" href="/joblisting"><li className='hover:scale-125 duration-200 pt-2 font-extrabold text-white' >Job Listing</li></Link>
                <Link className="cursor-pointer" href="/about"><li className='hover:scale-125 duration-200 pt-2 font-extrabold text-white'>About</li></Link>
                <Link className="cursor-pointer" href="/services"><li className='hover:scale-125 duration-200 pt-2 font-extrabold text-white' >Services</li></Link>
                    
                 <Link href={"/contact"}><button className= 'px-6 py-2 bg-blue-500 text-black   rounded-lg text-xl font-bold hover:animate-pulse duration-200'>Contact Us</button></Link>
                    
                </ul>
            </div>
            <div className='p-5 md:hidden z-20' onClick={()=>setToggle(!toggle)}>
            {toggle ?  <GiHamburgerMenu size={30} /> :  <RxCross2 size={30} /> }
                
            </div>
            {!toggle &&(
        <div className="fixed top-0 left-0 bg-white text-black h-screen w-full flex justify-center items-center ">
        <ul className=' text-xl font-semibold '>
            <li className='text-8xl my-4 '>Home</li>
            <li className='text-8xl my-4 '>Explore</li>
            <li className='text-8xl my-4 '>About</li>
            <li className='text-8xl my-4 ' >Contact</li>
        </ul>

        </div>)}
 
           

        </div>
  );
}

export default Nav;
