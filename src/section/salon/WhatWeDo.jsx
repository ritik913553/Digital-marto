import React from "react";
import {
    FaLaptopCode,
    FaPaintBrush,
    FaVideo,
    FaChartLine,
    FaInstagram,
    FaBullhorn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
    {
        icon: <FaPaintBrush className="text-3xl" />,
        title: "Elegant Spa/Salon Branding",
        description:
            "From logos to product packaging, we craft calming, luxurious identities clients remember.",
        image: [
            "/salon/branding1.png",
            "/salon/branding2.png",
            "https://images.unsplash.com/photo-1662289032144-3ed681fdd260?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwc2Fsb24lMjBicmFuZCUyMGtpdHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1583209814468-fce526b91543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWluaW1hbCUyMGJlYXV0eSUyMGJyYW5kJTIwc3RhdGlvbmFyeXxlbnwwfHwwfHx8MA%3D%3D",
        ],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(255,248,251,1)_0%,_rgba(255,225,238,1)_100%)]",
        textColor: "text-[#D14B8F]",
    },
    {
        icon: <FaInstagram className="text-3xl" />,
        title: "Instagram Reels & Promotions",
        description:
            "Engaging social content that shows off transformations and builds trust.",
        image: [
            "https://media.istockphoto.com/id/2152295485/photo/a-womans-hand-holds-a-phone-with-an-open-web-page-of-a-site-with-womens-cosmetics-and-orders.webp?a=1&b=1&s=612x612&w=0&k=20&c=sPCm6jgvFtzSWtVaooWjgPeopkHkMIvVheQjWrL6uQs=",
            "/salon/ig1.png",
            "/salon/ig2.png",
            "/salon/ig3.png",
        ],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(245,255,252,1)_0%,_rgba(180,234,232,1)_100%)]",
        textColor: "text-[#01A6A3]",
    },
    {
        icon: <FaLaptopCode className="text-3xl" />,
        title: "Website with Appointment System",
        description:
            "Beautiful booking-ready websites that make scheduling smooth for clients.",
        image: [
            "/salon/web1.png",
            "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop&q=60",
            "/salon/web2.png",
            "/salon/web3.png",
        ],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(255,252,240,1)_0%,_rgba(255,235,188,1)_100%)]",
        textColor: "text-[#D19700]",
    },
    {
        icon: <FaBullhorn className="text-3xl" />,
        title: "Facebook/Instagram Lead Ads",
        description:
            "Targeted local ads that bring real appointments, not just likes.",
        image: ["/salon/ads1.png", "/salon/ads2.png", "/salon/ads3.png"],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(255,245,255,1)_0%,_rgba(228,197,255,1)_100%)]",
        textColor: "text-[#9642B7]",
    },
    {
        icon: <FaVideo className="text-3xl" />,
        title: "Before/After Content Production",
        description:
            "Crisp transformations that turn heads and fuel your social proof.",
        image: [
            "/salon/beforeafter1.png",
            "/salon/beforeafter2.png",
            "/salon/beforeafter3.png",
           
        ],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(255,245,250,1)_0%,_rgba(255,190,225,1)_100%)]",
        textColor: "text-[#E1549D]",
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
                    We craft stunning, soothing brand identities and social
                    content that drive bookings and repeat visits.
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
