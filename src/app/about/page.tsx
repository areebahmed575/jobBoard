import React from 'react'
import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import Aboutjob from '../components/Aboutjob'
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import Link from 'next/link'
import Counter from '../components/Counter'
const about = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Zia Khan',
      role: 'Generative AI and Web 3.0 Developer ',
      paragraph:
      "Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?",
      image: '/1638368405154.jpg',
      socialMedia: {
        facebook: 'https://www.facebook.com/ziakhan/',
        twitter: 'https://twitter.com/ziakhan?lang=en',
        linkedin: 'https://www.linkedin.com/in/ziaukhan/?originalSubdomain=pk',
      },
    },
    {
      id: 2,
      name: 'Adil Altaf',
      role: 'Full Stack Developer',
      paragraph:
      "Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?",
      image: '/download.jpg',
      socialMedia: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/in/adilaltaf/',
      },
    }
  ]
  return (
    <>
    <Nav />
    <HeroSection title={"About Us"}  />
    <Aboutjob />
    <div className="grid grid-cols-2 gap-10 mt-20">
      {teamMembers.map((member) => (
        <div key={member.id} className="bg-white p-4 rounded-lg text-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-64 h-64 mx-auto rounded-full"
          />
          <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
          <p className="text-gray-500">{member.role}</p>
          <p className="text-gray-600 mt-4">{member.paragraph}</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href={member.socialMedia.facebook} className="text-blue-600">
            <FaFacebook size={32}/>
            </Link>
            <Link href={member.socialMedia.twitter} className="text-blue-500">
            <FaTwitter size={32} />
            </Link>
            <Link href={member.socialMedia.linkedin} className="text-blue-800">
            <FaLinkedin size={32}/>
            </Link>
          </div>
        </div>
      ))}
    </div>
    <Counter />
    </>      

      
  )
}

export default about