import React from 'react'

type HeroSectionProps = {
    title: string;
  };
  

const HeroSection: React.FC<HeroSectionProps> = ({title}) => {
  return (
    <div
        className="text-center md:px-44 px-3 md:py-40 py-28 w-full h-[70vh]"
        style={{
          backgroundImage: "url('/christian-velitchkov-mXz64B8-3h0-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: "100%",
          backgroundAttachment: 'fixed', // Fixed background on scroll
        }}
      >
        <div className='mt-16'>
          <h1 className='text-white md:text-6xl text-3xl font-extrabold'>{title}</h1>
          <p className='text-white font-bold mt-4 '>Find your dream jobs in our powerful career website template.</p>
        </div>
        </div>  
  )
}

export default HeroSection