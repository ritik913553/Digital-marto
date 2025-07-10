import React from "react";
import {
    FaLaptopCode,
    FaPaintBrush,
    FaVideo,
    FaChartLine,
    FaInstagram,
    FaBullhorn,
    FaSearch,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
    {
        icon: <FaLaptopCode className="text-3xl" />,
        title: "High-End Website & Portfolio Design",
        description:
            "Luxury websites and curated project galleries that convert visitors into premium design clients.",
        image: [
            "https://media.istockphoto.com/id/2154488647/photo/mobile-application-development-team-is-studying-and-designing-ux-ui-system-to-display-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=wIwzrb-iOnv8V9oyRuuj-VI3fT6vlTXFIK6IL3qRpCI=",
            "https://media.istockphoto.com/id/1127338439/photo/computer-desktop-interior-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=5-oOpMH6HjH6sKHkIJ1stGGT8cbSNXtuphjDvOoj2qM=",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
        ],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(255,250,244,1)_0%,_rgba(230,210,190,1)_100%)]",
        textColor: "text-[#A87452]",
    },
    {
        icon: <FaInstagram className="text-3xl" />,
        title: "Project Storytelling for Instagram & Reels",
        description:
            "From moodboards to reveals, we craft compelling Instagram content that builds trust and authority.",
        image: ["/interior/ig1.png", "/interior/ig2.png", "/interior/ig3.png"],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(252,248,255,1)_0%,_rgba(222,205,255,1)_100%)]",
        textColor: "text-[#8753B3]",
    },
    {
        icon: <FaPaintBrush className="text-3xl" />,
        title: "Designer Logo + Branding Kit",
        description:
            "Cohesive logos, fonts, and colors that elevate your design firm’s identity and leave a lasting impression.",
        image: [
            "/interior/branding1.png",
            "/interior/branding2.png",
            "/interior/branding3.png",
        ],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(255,245,240,1)_0%,_rgba(255,218,204,1)_100%)]",
        textColor: "text-[#C06C4E]",
    },
    {
        icon: <FaSearch className="text-3xl" />,
        title: "Pinterest for Interior Leads",
        description:
            "Get discovered where high-intent homeowners scroll. We optimize your content for Google and Pinterest alike.",
        image: [
            "/interior/pinterest1.png",
            "/interior/pinterest2.png",
            "/interior/pinterest3.png",
        ],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(245,255,251,1)_0%,_rgba(204,244,224,1)_100%)]",
        textColor: "text-[#45A17B]",
    },
    {
        icon: <FaBullhorn className="text-3xl" />,
        title: "Facebook/Instagram Ad Setup",
        description:
            "We design and run targeted social ads that bring inquiries from clients who love your aesthetic.",
        image: [
            "/interior/ads1.png",
            "/interior/ads2.png",

            "/interior/ads3.png",
        ],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(255,250,240,1)_0%,_rgba(255,222,164,1)_100%)]",
        textColor: "text-[#D88C00]",
    },
];

const WhatWeDo = () => {
    const isSmallScreen =
        typeof window !== "undefined" && window.innerWidth < 640;
    return (
        <div className="poppins-font bg-gray-100 min-h-screen  sm:p-0 p-5 ">
            <div className="poppins-font min-h-screen  max-w-5xl py-20 mx-auto w-full">
                <h1 className="text-4xl  bg-clip-text text-transparent bg-linear-to-r from-[#04bcbe] to-[#056d90] font-bold">
                    What We Do ?
                </h1>
                <p className="mt-2 opacity-85 text-md">
                    We help interior designers showcase projects, <br /> attract
                    high-ticket clients, and build trust online.
                </p>
                <div className="rounded-3xl h-full sm:bg-white sm:p-7 mt-15 flex flex-col gap-y-10 ">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`sm:rounded-3xl rounded-xl sm:h-72 hover:scale-105 duration-75 transition-all ease-in-out overflow-hidden flex items-center flex-col sm:flex-row shadow-md bg-gradient-to-r sm:p-5  sm:pr-0 gap-3 ${service.bgGradient}`}
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
                                            y: isSmallScreen
                                                ? ["0%", "-250%"]
                                                : ["0%", "-50%"],
                                        }}
                                        transition={{
                                            duration: 8,
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
