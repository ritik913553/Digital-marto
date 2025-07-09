import React, { useEffect } from 'react'
import HeroSection from '../section/interior-designe/HeroSection'
import IndustryGaps from '../section/interior-designe/IndustryGaps'
import WhatWeDo from '../section/interior-designe/WhatWeDo'
import ResultsSnapshot from '../section/interior-designe/ResultsSnapshot'

const InteriorDesigne = () => {
  useEffect(() => {
    document.title = 'DigitalMato | InteriorDesigne';
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

export default InteriorDesigne
