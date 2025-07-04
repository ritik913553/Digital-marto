import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import { motion } from "framer-motion";

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
                style={{
                    background: "#a4dfe0",
                    background:
                        "linear-gradient(355deg,rgba(164, 223, 224, 1) 10%, rgba(255, 255, 255, 1) 80%)",
                }}
                className="relative sm:pt-10 pt-25  bg-no-repeat bg-cover h-full w-full flex items-center justify-center"
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
                    className="flex flex-col justify-center items-center space-y-4 z-20 p-2 sm:p-0"
                >
                    <h1 className="sm:w-[70%] w-[100%]  font-black text-2xl sm:text-5xl  sm:pb-5">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#04bcbe] to-[#056d90] font-semibold text-2xl sm:text-5xl">
                            We Build Brands  That Click
                        </span>{" "}
                        <br />{" "}
                        <span className="inline-block text-black mt-5 sm:mt-10">
                            {" "}
                            For Restaurants, Cafes, Salons, EdTech & Interiors
                        </span>
                    </h1>
                    <p className=" w-[100%] sm:w-[57%] text-center text-gray-900 text-sm sm:text-lg font-medium ">
                        Were not just a creative agency. Were your
                        niche-specific growth partner helping you stand out,
                        sell more, and look amazing online.
                    </p>
                    <div className="flex gap-5 pt-5  justify-center">
                        <Button title="Lets Build Your Brand" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
