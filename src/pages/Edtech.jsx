import React, { useEffect } from 'react'
import HeroSection from '../section/edtech/HeroSection'
import IndustryGaps from '../section/edtech/IndustryGaps'
import WhatWeDo from '../section/edtech/WhatWeDo'
import ResultsSnapshot from '../section/edtech/ResultsSnapshot'

const Edtech = () => {
  useEffect(() => {
    document.title = 'DigitalMato | Edtech';
  }, [])
  return (
   <div className="poppins-font relative overflow-x-hidden ">
            <HeroSection />
            <IndustryGaps />
            <WhatWeDo />
            <ResultsSnapshot />
        </div>
  )
}

export default Edtech
