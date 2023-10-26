'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Hero = () => {
const router=useRouter()
  return (
    <>
      <div
        className="text-center md:px-44 px-3 md:py-40 py-28 w-full h-screen"
        style={{
          backgroundImage: "url('/christian-velitchkov-mXz64B8-3h0-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: "100%",
          backgroundAttachment: 'fixed', // Fixed background on scroll
        }}
      >
        <div className='mt-14'>
          <h1 className='text-white md:text-6xl text-3xl font-extrabold'>A Powerful Career Website Template</h1>
          <p className='text-white font-bold mt-4 '>Find your dream jobs in our powerful career website template.</p>
        </div>
        <div className="flex items-center justify-center mt-32">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for jobs..."
            className="bg-white border border-gray-300 rounded-md px-12 py-4 mr-4 text-lg outline-none"
          />

          {/* Job Title Selector */}
          <select className="bg-white border border-gray-300 rounded-md px-12 py-4 mr-4 text-lg outline-none">
            <option value="software">Anywhere</option>
            <option value="designer">San Francisco</option>
            <option value="designer">New York</option>
            <option value="designer">Ontario</option>
            <option value="designer">Kansas</option>
            <option value="designer">Toronto</option>
            <option value="designer">Mountain View</option>
            <option value="designer">Palo Alto</option>
          




            {/* Add more job titles as needed */}
          </select>

          {/* Job Type Selector */}
          <select className="bg-white border border-gray-300 rounded-md px-16 py-4 mr-4 text-lg outline-none">
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="part-time">Remote</option>
            {/* Add more job types as needed */}
          </select>

          {/* Search Button */}
          
          <button className="bg-blue-500 text-white rounded-md px-20 py-4 text-lg "  onClick={()=>router.push("/")}>Search</button>
          
        </div>
      </div>
    </>
  );
}

export default Hero;
