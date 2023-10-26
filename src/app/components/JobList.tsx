"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { jobListings } from './Jobs';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useUser } from '@auth0/nextjs-auth0/client';

const JobListingPage = () => {
  const {user,error,isLoading}=useUser ()  
  
  const router=useRouter()
  const pageSize = 9; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Sample job listings

  // Calculate total number of pages
  const totalPages = Math.ceil(jobListings.length / pageSize);

  // Get current page items
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentJobs = jobListings.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage:number) => {
    setCurrentPage(newPage);
  };

  return (
        <>
      <div className="text-white min-h-screen mt-20">
        <div className="container mx-auto mt-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold mb-4 text-black">Job Listings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-20 mt-11">
              {currentJobs.map((job) => (
                
                <Link key={job.id} href={`/joblisting/${job.id}`} >
                  
                    <div className="bg-white p-4 shadow-md rounded-md text-blue-500 transform transition duration-300 ease-in-out hover:scale-105">
                      <h2 className="text-lg font-semibold">{job.title}</h2>
                      <p className="text-gray-600">{job.location}</p>
                      <p className="text-gray-700 font-semibold">{job.salary}</p>
                      <div className="mt-2">
                        <span>{job.type}</span>
                      </div>
                    </div>
                  
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2 disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from(Array(totalPages).keys()).map((page) => (
                <button
                  key={page + 1}
                  onClick={() => handlePageChange(page + 1)}
                  className={`bg-blue-500 text-white rounded-md px-4 py-2 mr-2 ${
                    currentPage === page + 1 ? 'font-bold' : ''
                  }`}
                  style={{
                    border: '1px solid gray', // Add gray border
                  }}
                >
                  {page + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-blue-500 text-white rounded-md px-4 py-2 ml-2 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center border-t-[1px] shadow-sm'>
        <h1 className="text-4xl font-semibold mb-4 text-black mt-10">Our Candidates Work In Company</h1>
        <p className='text-gray-500 text-lg mt-8'>
          Porro error reiciendis commodi beatae omnis similique voluptate rerum<br />
          ipsam fugit mollitia ipsum facilis expedita tempora suscipit iste
        </p>
        <div className="flex justify-center mt-20">
          <Image src="/linkedin-logos-idGEAxpUUL.png" alt="PayPal" width={150} height={80} className="mr-24 " />
          <Image src="/stripe-logos-idgqVKvRHS.png" alt="Stripe" width={150} height={80} className="mr-24" />
          <Image src="/visa-inc-logos-idIO_1Zy_o.png" alt ="Visa" width={150} height={80} className="mr-24" />
          <Image src="/mailchimp-logos-id2IWG11vm.png" alt="MaliChimps" width={150} height={80} />
        </div>
        
        
        <div className="grid grid-cols-2 gap-4 mt-20 justify-evenly bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500">
  <div className="text-white p-10 flex flex-col justify-center">
    <h2 className="text-4xl ml-4">Looking For A Job?</h2>
    <p className="text-gray-200 ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.
    </p>
  </div>

  <div className="flex items-center justify-center">
  <Link href="/api/auth/login">
   
    <button className="bg-yellow-400 text-black rounded-md px-8 py-4 w-full" >
      Sign Up
    </button>
    </Link>
  </div>
</div>


      </div>
      
      
      
    </>
  );
};

export default JobListingPage;
