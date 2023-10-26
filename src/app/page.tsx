import Image from 'next/image'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Counter from './components/Counter'
import JobListings from './components/JobList'


export default function Home() {
  return (
    <>
   
    <Nav />
    <Hero />
    <Counter />
    <JobListings />

    </>
  )
}
