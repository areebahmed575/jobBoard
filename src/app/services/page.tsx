import React from 'react'
import HeroSection from '../components/HeroSection'
import Nav from '../components/Nav'
import App from '../components/quote';

const services = () => {
    const jobListings = [
        {
          id: 1,
          title: 'Design Strategy',
          icon: '🎨',
          paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, sed ratione? Iure voluptatem dolores ipsa sunt quasi. "
        },
        {
          id: 2,
          title: 'Marketing Strategy',
          icon: '📈',
          paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, sed ratione? Iure voluptatem dolores ipsa sunt quasi. "
        },
        {
          id: 3,
          title: 'Web Design',
          icon: '🌐',
          paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, sed ratione? Iure voluptatem dolores ipsa sunt quasi. "
        },
        {
          id: 4,
          title: 'Search Engine Results',
          icon: '🔍',
          paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, sed ratione? Iure voluptatem dolores ipsa sunt quasi. "
        },
        {
          id: 5,
          title: 'Market Loading',
          icon: '💼',
          paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, sed ratione? Iure voluptatem dolores ipsa sunt quasi. "
        },
        {
          id: 6,
          title: 'Pixel Perfect Design',
          icon: '🔳',
          paragraph:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, sed ratione? Iure voluptatem dolores ipsa sunt quasi. "
        },
      ];
  return (
    <>
    <Nav />
    <HeroSection title={"Our Services"} />
    <div className="container mx-auto mt-8 flex items-center justify-center mb-4">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold mb-4">Job Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-x-20 mt-11">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 shadow-md rounded-md text-center cursor-pointer transition duration-300 ease-in-out transform hover:bg-gray-100 hover:scale-105 space-y-8"
            >
              <div className="mb-4">
                <span className="text-4xl" role="img" aria-label={job.title}>
                  {job.icon}
                </span>
              </div>
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <p>{job.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
 

    </>
  )
}

export default services