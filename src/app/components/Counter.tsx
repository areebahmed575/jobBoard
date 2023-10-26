'use client'
import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [candidates, setCandidates] = useState(0);
  const [jobPosts, setJobPosts] = useState(0);
  const [jobsFilled, setJobsFilled] = useState(0);
  const [companies, setCompanies] = useState(0);

  useEffect(() => {
    const counters = [100, 50, 30, 20]; // Initial values for the counters
    const increments = [5, 2, 3, 1]; // Increment values for each counter
    const durations = [500, 800, 600, 700]; // Animation durations for each counter

    const updateCounters = () => {
      setCandidates((prev) => (prev < counters[0] ? prev + increments[0] : counters[0]));
      setJobPosts((prev) => (prev < counters[1] ? prev + increments[1] : counters[1]));
      setJobsFilled((prev) => (prev < counters[2] ? prev + increments[2] : counters[2]));
      setCompanies((prev) => (prev < counters[3] ? prev + increments[3] : counters[3]));
    };
    const intervals = counters.map((_, index) => setInterval(updateCounters, durations[index]));

    // Clear intervals on component unmount
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-800 text-white min-h-[75vh] -mt-12">
      <div className='text-center mt-14 py-8'>
        <h1 className='text-white md:text-6xl text-3xl font-extrabold'>Careers Statistics</h1>
        <p className='text-white font-bold mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde officiis
          recusandae sequi excepturi corrupti.
        </p>
      </div>
      <div className='flex justify-evenly mt-12'>
        {/* Candidates Counter */}
        <div className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white border border-blue-500 rounded-md p-6 mr-4'>
          <h2 className='text-xl font-semibold mb-2'>Candidates</h2>
          <p className='text-3xl text-center font-bold'>{candidates}</p>
        </div>

        {/* Job Posts Counter */}
        <div className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white border border-blue-500 rounded-md p-6 mr-4'>
          <h2 className='text-xl font-semibold mb-2'>Job Posts</h2>
          <p className='text-3xl text-center font-bold'>{jobPosts}</p>
        </div>

        {/* Jobs Filled Counter */}
        <div className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white border border-blue-500 rounded-md p-6 mr-4'>
          <h2 className='text-xl font-semibold mb-2'>Jobs Filled</h2>
          <p className='text-3xl text-center font-bold'>{jobsFilled}</p>
        </div>

        {/* Companies Counter */}
        <div className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white border border-blue-500 rounded-md p-6'>
          <h2 className='text-xl font-semibold mb-2'>Companies</h2>
          <p className='text-3xl text-center font-bold'>{companies}</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
