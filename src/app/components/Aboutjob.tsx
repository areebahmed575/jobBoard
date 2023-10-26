import Image from 'next/image'
import React from 'react'

const Aboutjob = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-20 items-center">
  <div className="text-center ml-36 ">
    <Image src="/close-up-young-colleagues-having-meeting.jpg" alt="Your Image" width={500} height={300} />
  </div>
  <div>
    <div className='space-y-4'>
      <h2 className="text-4xl">Careers for Your Careers</h2>
      <p className="text-gray-500 text-xl  tracking-widest space-y-6">
      Eveniet voluptatibus voluptates suscipit minima ,<br></br>cum voluptatum ut dolor, sed facere corporis qui,<br></br> ea quisquam quis odit minus nulla vitae. Sit, <br></br> voluptatem.
      </p>
      <p className="text-gray-200  tracking-widest ">
      Ipsum harum assumenda in eum vel eveniet numquam,<br></br> cumque vero vitae enim cupiditate deserunt eligendi officia<br></br> modi consectetur. Expedita tempora quos nobis earum hic ex<br></br> asperiores quisquam optio nostrum sit!
      </p>
    </div>
  </div>
</div>

  )
}

export default Aboutjob