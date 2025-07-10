import React from "react";
import {
    FaLaptopCode,
    FaBullhorn,
    FaMobileAlt,
    FaVideo,
    FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
    {
        icon: <FaLaptopCode className="text-3xl" />,
        title: "Website & Landing Page Design",
        description:
            "High-converting pages built for clarity, trust, and maximum enrollment.",
        image: [
            "https://media.istockphoto.com/id/1402784621/photo/web-development-for-ui-ux-design-concept-illustration-landing-page-template-business-idea.webp?a=1&b=1&s=612x612&w=0&k=20&c=rNjqHQqOf122OhdXZQHotXEl6O_7f73XjfO6Hq8yUjw=",
            "https://images.unsplash.com/photo-1648134859175-78b41b4db186?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9ubGluZSUyMGxlYXJuaW5nJTIwbGFuZGluZyUyMHBhZ2UlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
            "https://media.istockphoto.com/id/499924122/photo/e-learning-concept-with-a-teacher-presenting-online-education-program.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wmb58Lo3xBNvoUxKiXM96Ybb1Dhy6LUUVV_0PHS8vN0=",
        ],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(243,248,255,1)_0%,_rgba(196,224,255,1)_100%)]",
        textColor: "text-[#2563EB]",
    },
    {
        icon: <FaVideo className="text-3xl" />,
        title: "Video Ads & Animated Explainers",
        description:
            "Engaging videos that simplify your message and capture your learners’ attention.",
        image: [
            "https://media.istockphoto.com/id/1660945979/photo/edtech-education-technology-distance-learning-online-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=WI3MOypLoRt3IT0zGtDUzizgttKn548ljdfhkuzmIr4=",
            "https://media.istockphoto.com/id/1480703973/photo/concept-of-seo-optimization-for-website-and-mobile-website-landing-page-template-3d-vector.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wx4UMAxElNrLGGuutKBfHZqpYGR1kkbWQ7P0Vx0xOVI=",
            "https://plus.unsplash.com/premium_photo-1661665015293-f08f7cc938b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwY291cnNlJTIwcHJvbW8lMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3Dash.com/premium_photo-1661774418351-1ffeb7d90cf7?w=500&q=80&auto=format",
            "https://images.unsplash.com/photo-1719241842868-8a22b99bc7b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwY291cnNlJTIwcHJvbW8lMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D",
        ],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(250,245,255,1)_0%,_rgba(215,190,255,1)_100%)]",
        textColor: "text-[#9333EA]",
    },
    {
        icon: <FaMobileAlt className="text-3xl" />,
        title: "Custom e-Learning  Websites",
        description:
            "Streamlined app interfaces designed for usability, retention, and satisfaction.",
        image: [
            "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9uJTIwYXBwJTIwdXNlciUyMGludGVyZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1627757818592-ce2649563a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZSUyMGxlYXJuaW5nJTIwbW9iaWxlJTIwVVglMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
            "/salon/learning1.png",
        ],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(240,255,250,1)_0%,_rgba(172,255,234,1)_100%)]",
        textColor: "text-[#059669]",
    },
    {
        icon: <FaBullhorn className="text-3xl" />,
        title: "Meta Ad Funnels",
        description:
            "Targeted ad creatives and landing flows that turn scrolls into student signups.",
        image: ["/edtech/ads1.png", "/edtech/ads2.png", "/edtech/ads3.png"],
        bgGradient:
            "bg-[radial-gradient(circle,_rgba(255,252,240,1)_0%,_rgba(255,226,172,1)_100%)]",
        textColor: "text-[#D97706]",
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
                    From e-learning UI to performance creatives, <br /> we help EdTech
                    companies turn interest into enrollment.
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
