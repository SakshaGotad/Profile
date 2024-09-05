import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './Context'

const About = () => {
  const {updateAbout}= useGlobalContext();
  useEffect(()=>{
    updateAbout();
  },[]);
  return (
    <HeroSection />
  )
}

export default About
