import React, { useEffect } from 'react'
import HeroSection from '../section/restaurants/Herosection'
import IndustryGaps from '../section/restaurants/IndustryGaps'
import WhatWeDo from '../section/restaurants/WhatWeDo'
import ResultsSnapshot from '../section/restaurants/ResultsSnapshot'

const Restaurants = () => {
  useEffect(() => {
    document.title = 'DigitalMato | Restaurants';
  }, [])
  return (
    <div className='poppins-font relative overflow-x-hidden ' >
      <HeroSection />
      <IndustryGaps />
      <WhatWeDo />
      <ResultsSnapshot />
    </div>
  )
}

export default Restaurants
