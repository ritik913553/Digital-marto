import React, { useEffect } from "react";
import HeroSection from "../section/salon/HeroSection";
import WhatWeDo from "../section/salon/WhatWeDo";
import IndustryGaps from "../section/salon/IndustryGaps";
import ResultsSnapshot from "../section/salon/ResultsSnapshot";

const Salon = () => {
    useEffect(() => {
        document.title = 'DigitalMato | Salon';
      }, [])
    return (
        <div className="poppins-font relative overflow-x-hidden ">
            <HeroSection />
            <IndustryGaps />
            <WhatWeDo />
            <ResultsSnapshot />
            
        </div>
    );
};

export default Salon;
