import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './Context'

const Home = () => {
 
  const {updateHomepg} = useGlobalContext();
  useEffect(()=>{
    updateHomepg();
  },[])
  return (
   
   <HeroSection />
  )
}

export default Home
