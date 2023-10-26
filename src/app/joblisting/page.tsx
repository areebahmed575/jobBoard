import React from 'react'
import HeroSection from '../components/HeroSection'
import Nav from '../components/Nav'
import JobListingPage from '../components/JobList'

const joblisting = () => {
  return (
    <>
    <Nav />
    <HeroSection title={"Job Listing"}  />
    <JobListingPage />


    </>     
  )
}

export default joblisting