import React from "react";
import {
    FaLaptopCode,
    FaPaintBrush,
    FaVideo,
    FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
    {
        icon: <FaLaptopCode className="text-3xl" />,
        title: "Custom Websites",
        description:
            "Modern, mobile-first websites tailored for your industry.",
        image: [
            "/whatWeDo/web1.png",
            "/whatWeDo/web2.webp",
            "/whatWeDo/web3.webp",
            "/whatWeDo/web4.webp",
        ],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(255,247,251,1)_0%,_rgba(224,191,202,1)_100%)]",
        textColor: "text-[#DC41A4]",
    },
    {
        icon: <FaPaintBrush className="text-3xl" />,
        title: "Branding & Design",
        description:
            "Logos, menus, packaging—everything that makes your brand memorable.",
        image: ["/whatWeDo/designe.png","/whatWeDo/designe1.webp","/whatWeDo/designe2.webp","/whatWeDo/designe3.webp","/whatWeDo/designe4.webp"],
        bgGradient: "bg-[radial-gradient(circle,_rgba(246,255,252,1)_0%,_rgba(174,225,232,1)_100%)]",
        textColor: "text-[#02A6B2]",
    },
    {
        icon: <FaVideo className="text-3xl " />,
        title: "Social Media & Reels",
        description: "Engaging content that drives bookings and builds trust.",
        image: ["/whatWeDo/social.png","/whatWeDo/social1.webp","/whatWeDo/social2.png","/whatWeDo/social3.png"],
        bgGradient: "bg-[radial-gradient(circle,_rgba(255,175,97,1)_0%,_rgba(252,234,220,1)_100%)]",
        textColor: "text-[#F86709]",
    },
    {
        icon: <FaChartLine className="text-3xl " />,
        title: "Growth Campaigns",
        description: "Lead gen, ads, and SEO that actually convert.",
        image: ["/whatWeDo/seo.png","/whatWeDo/seo1.webp","/whatWeDo/seo2.png","/whatWeDo/seo3.png","/whatWeDo/seo4.png"],
        bgGradient: "bg-[radial-gradient(circle,_rgba(246,255,252,1)_0%,_rgba(114,242,165,1)_100%)]",
        textColor: "text-[#1A8244]",
    },
];

const WhatWeDo = () => {
    const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 640;
    return (
        <div className="poppins-font bg-gray-100 min-h-screen  sm:p-0 p-5 ">
            <div className="poppins-font min-h-screen  max-w-4xl py-20 mx-auto w-full">
                <h1 className="text-4xl  bg-clip-text text-transparent bg-linear-to-r from-[#04bcbe] to-[#056d90] font-bold">
                    What We Do ?
                </h1>
                <p className="mt-2 opacity-85 text-md">
                    Your business isnt generic. Your agency shouldn't be either.
                </p>
                <div className="rounded-3xl h-full sm:bg-white sm:p-15 mt-15 flex flex-col gap-y-10 ">
                    {services.map((service, index) => (
                        <div
                            className={`rounded-3xl sm:h-72 hover:scale-105 duration-75 transition-all ease-in-out overflow-hidden flex items-center flex-col sm:flex-row shadow-md bg-gradient-to-r sm:p-5  sm:pr-0 gap-3 ${service.bgGradient}`}
                        >
                            <div className="sm:w-1/2 p-5 sm:p-0">
                                <h3
                                    className={`relative  flex gap-x-4 text-[1.9rem] sm:text-[2.3rem] font-semibold mb-2  ${service.textColor}`}
                                >
                                    {service.title}
                                    <span
                                        className={`absolute right-0 -top-3 ${service.textColor}`}
                                    >
                                        {service.icon}
                                    </span>
                                </h3>
                                <p
                                    className={`text-sm font-semibold opacity-70  ${service.textColor}`}
                                >
                                    {service.description}
                                </p>
                            </div>
                            <div className="sm:w-1/2 bg-white h-auto p-5 sm:p-2 rounded-t-lg overflow-hidden ">
                                <div className="p-2 h-full">
                                    <motion.div
                                        className="flex flex-col h-52 sm:h-full w-full gap-5"
                                          animate={{
                                            y: isSmallScreen ? ["0%", "-250%"] : ["0%", "-50%"]
                                        }}
                                        transition={{
                                            duration:8,
                                            ease: "linear",
                                            repeat: Infinity,
                                            repeatType: "loop",
                                        }}
                                        style={{ willChange: "transform" }}
                                    >
                                        {/* Duplicate images for seamless loop */}
                                        {[
                                            ...service.image,
                                            ...service.image,
                                        ].map((image, idx) => (
                                            <img
                                                key={idx}
                                                src={image}
                                                className="w-full object-contain rounded-2xl"
                                            />
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;

//
//
// Custom Websites
// Modern, mobile-first websites tailored for your industry.
// Branding & Design
// Logos, menus, packaging everything that makes your brand memorable.
// Social Media & Reels
// Engaging content that drives bookings and builds trust.
// Growth Campaigns
// Lead gen, ads, and SEO that actually convert.
