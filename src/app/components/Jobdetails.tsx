"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { jobListings } from './Jobs'
import Link from 'next/link';
import { FaFacebook} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import { useRouter } from 'next/navigation'
 
type JobDetailsProps = {
  id:number
};

const Jobdetails: React.FC<JobDetailsProps> = ({id}) => {
  
const router=useRouter()
  
  return (
    
    <div className="container mx-auto mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
      {/* First Column */}
      <div>
        <div>
      
    <div>
      <h1 className="text-4xl font-semibold">{jobListings[id-1].title}</h1>
      <div className='flex gap-x-2 mt-4'>
      <p className="text-gray-500">{jobListings[id-1].location}</p>
      <p className="text-blue-800">{jobListings[id-1].type}</p>
      </div>
    </div>
  


        </div>
        
        <Image src="/close-up-young-colleagues-having-meeting.jpg" alt="Your Image" width={500} height={300} className='my-4' />
        <h2 className="text-2xl font-thin text-blue-800 mt-6">Job Description</h2>
        <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus.</p>
        <p className='mt-4 text-gray-400'>Velit unde aliquam et voluptas reiciendis non sapiente labore, deleniti asperiores blanditiis nihil quia officiis dolor vero iste dolore vel molestiae saepe. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!</p>
        
        <h2 className="text-2xl font-thin text-blue-900 mt-6">Responsibilities</h2>
<ul className="mt-4 list-disc pl-8 text-gray-400">
  <li>Responsibility 1</li>
  <li>Responsibility 2</li>
  <li>Responsibility 3</li>
</ul><h2 className="text-2xl font-thin text-blue-900 mt-6">Education + Experience</h2>
        <ul className="mt-4 list-disc pl-8 text-gray-400 ">
          <li>Education + Experience 1</li>
          <li>Education + Experience 2</li>
          <li>Education + Experience 3</li>
        </ul>
        <h2 className="text-2xl font-thin text-blue-900 mt-6">Other Benefits</h2>
        <ul className="mt-4 list-disc pl-8 text-gray-400">
          <li>Benefit 1</li>
          <li>Benefit 2</li>
          <li>Benefit 3</li>
        </ul>
      </div>

      {/* Second Column */}
      <div className='mt-10'>
        <button className="bg-blue-500 text-white p-2 rounded-md w-32 mb-4" onClick={()=>router.push("#")}>Apply Now</button>
        <div className="bg-gray-100 p-6 rounded-md w-1/2 h-[25%]  ">
          <h2 className="text-2xl font-semibold ">Job Summary</h2>
          <div className='mt-6 space-y-3'>
  <p className="text-black font-semibold">Published on: <span className="text-gray-500">April 14, 2019</span></p>
  <p className="text-black font-semibold">Vacancy: <span className="text-gray-500">20</span></p>
  <p className="text-black font-semibold">Employment Status: <span className="text-gray-500">Full-time</span></p>
  <p className="text-black font-semibold">Experience: <span className="text-gray-500">2 to 3 year(s)</span></p>
  <p className="text-black font-semibold">Job Location: <span className="text-gray-500">New York City</span></p>
  <p className="text-black font-semibold">Salary: <span className="text-gray-500">$60k - $100k</span></p>
  <p className="text-black font-semibold">Gender: <span className="text-gray-500">Any</span></p>
 
</div>

        </div>
        <div className="mt-2 bg-gray-100 w-1/2 h-20 px-2 py-2">
          <h2 className="text-lg font-semibold">Share</h2>
          <div className="flex space-x-2 text-blue-600 ">
            <Link href="#">
            <FaLinkedin  size={32} />
            </Link>
            <Link href="#">
            <FaFacebook size={32}/>
            </Link>
            <Link href="#">
            <FaTwitter size={32} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobdetails

{/*
{jobListings.map((job)=>(
        <div>
        <div/>
        ))}
        apply text-black on  "Published on:,Vacancy:,Employment Status:,Experience: ,Job Location:,Salary:,Gender:,Application Deadline:  " 
 */}