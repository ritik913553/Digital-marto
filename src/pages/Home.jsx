import React, { useEffect } from 'react'
import HeroSection from '../section/HeroSection'
import Navbar from '../section/Navbar'
import GalarySection from '../section/GalarySection'
import StatsSection from '../section/StatsSection'
import WhatWeProvide from '../section/WhatWeProvide'
import WhatWeDo from '../section/WhatWeDo'
import ClientTestinomial from '../section/ClientTestinomial'
import Support from '../section/Support'
import WhyDigitalMarto from '../section/WhyDigitalMarto'
import GrowingBrandsSection from '../section/GrowingBrandsSection'
import ContactSection from '../section/ContactSection'

const Home = () => {
  useEffect(() => {
    document.title = 'DigitalMato | Home';
  }, [])
  return (
    <div className='relative overflow-x-hidden '>
      <HeroSection  />
      <GalarySection />
      <StatsSection />
      <WhatWeDo />
      <WhatWeProvide />
      <WhyDigitalMarto />
      <Support />
      <ClientTestinomial />
      <GrowingBrandsSection />
    </div>
  )
}

export default Home
