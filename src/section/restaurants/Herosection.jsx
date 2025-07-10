import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../../component/Button";

const HeroSection = () => {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const trigger = window.innerHeight * 0.01; // 30% of viewport
            setHide(window.scrollY > trigger);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div
            className="poppins-font h-[80vh]
 sm:h-screen w-full flex flex-col items-center justify-center text-center bg-cover bg-center gap-5 overflow-hidden"
        >
            <div
               
               className="relative sm:pt-10 pt-25 bg-no-repeat bg-cover h-full w-full flex items-center justify-center bg-[linear-gradient(355deg,_rgba(164,223,224,1)_10%,_rgba(255,255,255,1)_80%)]"
            >
                {/* Ripple effect */}
                <div className="ripple"></div>
                <div className="ripple" style={{ animationDelay: "1s" }}></div>
                <div className="ripple" style={{ animationDelay: "1s" }}></div>
                <div className="ripple" style={{ animationDelay: "1s" }}></div>

                {/* Centered logo */}
                <div className="z-10 absolute mt-15  opacity-20 h-60 rounded-full flex items-center justify-center">
                    <img
                        className="h-full w-full"
                        src="/logo1.png"
                        alt="Logo"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={
                        hide ? { opacity: 0, y: -100 } : { opacity: 1, y: 0 }
                    }
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ zIndex: 20 }}
                    className="flex flex-col justify-center items-center space-y-5 z-20 mt-15 sm:p-0"
                >
                    <h1 className="relative inline-block font-semibold text-[2.7rem] sm:text-5xl leading-12 text-[#047B96] shimmer-text">
                      Turn Tables with <br /> <span className="text-black sm:text-4xl text-[1.5rem] mt-2">Brand-First Marketing</span> 
                    </h1>


                    <p className=" w-[100%] sm:w-[57%] text-center text-gray-900 text-sm sm:text-lg font-medium p-1 sm:p-0">
                      From dine-in to online-build a restaurant brand that tastes as good as it looks.
                    </p>
                    <div className="flex gap-5 pt-12   justify-center">
                        <Button title="Lets Build Your Brand" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
