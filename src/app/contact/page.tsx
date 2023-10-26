'use client'
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Nav from '../components/Nav';
import Link from 'next/link';

const Contact = () => {
 
    const[user, setUser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        message:""
    })
    const [status, setStatus] = useState<string | null>(null);


    function handleChange(e:any) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({...prevUser, [name] : value}));
    }
    const handleSubmit = async (e:any) => {
      e.preventDefault();

      try {
          const response = await fetch('/api/contact', {
              method:'POST',
              headers:{"Content_Type":"application/json"},
              body: JSON.stringify({
                  firstname:user.firstname,
                  lastname:user.lastname,
                  email:user.email,
                  phone:user.phone,
                  message:user.message
              })
          })
          // Set the status based on the response from the API route
          if (response.status === 200) {
              setUser({
                  firstname: "",
                  lastname: "",
                  email: "",
                  phone: "",
                  message: ""
              })
              setStatus('success');
          } else {
              setStatus('error');
          }

      }catch (e) {
          console.log(e)
      }

  }
  

  
  return (
    <>
      <Nav />
      <HeroSection title="Contact Us" />
      <div className="container mx-auto mt-8 flex justify-center mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 space-x-36">
          {/* First Column */}
          {/* First Column */}
<form onSubmit={handleSubmit} >
  <div className="mb-4 flex">
    <div className="w-1/2 pr-2">
      <label className="text-lg ">First Name</label>
      <input
        type="text"
        className="block w-full p-2 border rounded"
        name="firstname"
        id="firstname"
        placeholder="Enter your first name"
        value={user.firstname}
        onChange={handleChange}
        required
      />
    </div>
    <div className="w-1/2 pl-2">
      <label className="text-lg ">Last Name</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        className="block w-full p-2 border rounded"
        placeholder="Enter your last name"
        value={user.lastname}
        onChange={handleChange}
        required
      />
    </div>
  </div>
  <div className="mb-4">
    <label className="text-lg ">Email</label>
    <input
      type="email"
      name="email" id="email"
      className="block w-full p-2 border rounded"
      placeholder="Enter your email"
      value={user.email}
      onChange={handleChange}
      required
      autoComplete="off"
    />
  </div>
  <div className="mb-4">
    <label className="text-lg">Phone</label>
    <input
      type="number"
      name="phone" id="phone"
      className="block w-full p-2 border rounded"
      placeholder="Enter your phone number"
      value={user.phone}
      onChange={handleChange}
      required
      autoComplete="off"
    />
  </div>
  <div className="mb-4">
    <label className="text-lg ">Message</label>
    <textarea
      className="block w-full p-2 border rounded"
      rows={5}
      name="message" id="message"
      placeholder="Enter your message"
      value={user.message}
      onChange={handleChange}
      required
      autoComplete="off"
    ></textarea>
  </div>
  {status === 'success' && (
  <p className="text-blue-600 font-bold mt-4">
    Thank you for your message!
  </p>
)}
{status === 'error' && (
  <p className="text-red-600 font-bold mt-4">
    There was an error submitting your message. Please try again.
  </p>
)}
  <button type="submit" className="bg-blue-500 text-white p-3 mt-4 rounded hover:bg-blue-700">
    Send Message
  </button>
</form >


          {/* Second Column */}
          <div  className="mt-24">
            <div className="mb-4 text-gray-500" >
              <p className="text-base  font-bold">Address</p>
              <p>123 Main Street</p>
              <p>Suite 456</p>
              <p>City, State ZIP</p>
            </div>
            <div className="mb-4 text-gray-500">
              <p className="text-base font-bold">Phone</p>
              <Link href={"/contact"}><p className='text-blue-800'>(123) 456-7890</p></Link>
            </div>
            <div className="mb-4 text-gray-500">
              <p className="text-base font-bold">Email Address</p>
              <Link href={"/contact"}><p className='text-blue-800'>contact@example.com</p></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
