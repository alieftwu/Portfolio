import React from 'react'
/* adds footer to project page */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading ="PROJECTS." text ="Recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project;