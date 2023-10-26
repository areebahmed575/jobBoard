import HeroSection from "@/app/components/HeroSection"
import Jobdetails from "@/app/components/Jobdetails"
import Nav from "@/app/components/Nav"
import { jobListings } from "@/app/components/Jobs"

export default function Page({ params }: { params: { id: number} }) {
    
    return (
    <>
    <Nav />
    <HeroSection title={`${jobListings[params.id-1].title}`} />
    <Jobdetails id={params.id}  />
    </>
    )
  }