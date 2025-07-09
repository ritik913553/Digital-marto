import React, { useState } from "react";
import { motion } from "framer-motion";
import { h1 } from "framer-motion/client";

const workWithData = [
    {
        name: "Restaurants & Cafes",
        icon: "🍽️",
        video: "https://videos.pexels.com/video-files/3768941/3768941-hd_1920_1080_25fps.mp4",
    },
    {
        name: "Spa & Salons",
        icon: "💇‍♀️",
        video: "https://videos.pexels.com/video-files/3997792/3997792-uhd_2732_1440_25fps.mp4",
    },
    {
        name: "EdTech Startups",
        icon: "🎓",
        video: "https://videos.pexels.com/video-files/5198159/5198159-uhd_2560_1440_25fps.mp4",
    },
    {
        name: "Interior Designers",
        icon: "🛋️",
        video: "https://videos.pexels.com/video-files/32719926/13948791_2560_1440_30fps.mp4",
    },
];

const WhatWeProvide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="poppins-font h-screen w-full  max-w-4xl pt-20 p-5 sm:px-0 mx-auto ">
            <h1 className="poppins-font text-4xl  sm:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#04bcbe] to-[#056d90] ">
                Who We Work With?
            </h1>
            <p className="text-black opacity-80 mt-5  sm:text-md">
                We specialize in creative solutions for:
            </p>
            <div className="w-full h-96  flex mt-10 gap-x-5">
                <div className="sm:w-1/5 w-full h-full flex flex-col gap-y-3 ">
                    {workWithData.map((item, index) => (
                        <div key={index} className="flex flex-col gap-y-3 ">
                            <div
                                className="p-2 w-full h-16  sm:h-16 overflow-y-hidden rounded-lg"
                                key={index}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                        delay: 0.1 * index,
                                    }}
                                    whileInView={{ opacity: 1, y: -5 }}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-full cursor-pointer flex  px-2 py-3 h-14 text-sm items-center gap-x-3 ${
                                        index != currentIndex
                                            ? "bg-[#e2e9e9]"
                                            : "bg-[#ffffff] border-1 border-[#d1e8e9]   "
                                    }  transition-all duration-100 rounded-lg overflow-hidden`}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <h3>{item.name}</h3>
                                </motion.div>
                            </div>
                            {currentIndex == index && (
                                <div className="bg-[#e2e9e9] sm:hidden block  rounded-lg h-48 w-full overflow-hidden">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{
                                            opacity: 0,
                                            x: 400,
                                            rotateX: 90,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            rotateX: 0,
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            ease: "easeInOut",
                                        }}
                                        className="bg-[#AEE2E3]  rounded-lg w-full h-full flex shadow-lg  items-center justify-center overflow-hidden"
                                    >
                                        {workWithData[currentIndex].video ? (
                                            <video
                                                src={
                                                    workWithData[currentIndex]
                                                        .video
                                                }
                                                autoPlay
                                                loop
                                                muted
                                                className=" h-full w-full object-cover"
                                            />
                                        ) : (
                                            <img
                                                src={
                                                    workWithData[currentIndex]
                                                        .image
                                                }
                                                className="h-full w-full object-cover"
                                            />
                                        )}
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="bg-[#e2e9e9] hidden sm:block rounded-lg h-full w-4/5 overflow-hidden">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 400, rotateX: 90 }}
                        animate={{ opacity: 1, x: 0, rotateX: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeInOut",
                        }}
                        className="bg-[#AEE2E3] rounded-lg w-full h-full flex shadow-lg  items-center justify-center overflow-hidden"
                    >
                        {workWithData[currentIndex].video ? (
                            <video
                                src={workWithData[currentIndex].video}
                                autoPlay
                                loop
                                muted
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <img
                                src={workWithData[currentIndex].image}
                                className="h-full w-full object-cover"
                            />
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeProvide;
