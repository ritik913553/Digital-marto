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
    title: "Visual Rebranding",
    description:
      "Menus, logos, and color palettes that reflect your restaurant's true flavor.",
    image: [
      "/restaurant/rebrand1.jpg",
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/37/8f/fd/7d/17/v1_E10/E106CA4E.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=7405bb12d99a42d68520a3a9315fe4c1918888a06fc5ccd0c34849c6f935236e",
      "https://images.unsplash.com/photo-1519452950672-020190464131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVudSUyMHJlZGVzaWdufGVufDB8fDB8fHww",
      "/restaurant/rebrand2.jpg",
    ],
    bgGradient:
      "bg-[radial-gradient(circle,_rgba(255,245,240,1)_0%,_rgba(255,218,204,1)_100%)]",
    textColor: "text-[#E96C43]",
  },
  {
    icon: <FaInstagram className="text-3xl" />,
    title: "Instagram Strategy",
    description:
      "Scroll-stopping content plans and management that grow loyal foodies.",
    image: [
      "https://images.unsplash.com/photo-1576829825058-e7eba18dc1ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5zdGFncmFtJTIwY29udGVudCUyMHN0cmF0ZWd5JTIwZm9yJTIwcmVzdGF1cmFudHN8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1663011642720-048a0afeca62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29jaWFsJTIwbWVkaWElMjBmb29kJTIwZ3JpZHxlbnwwfHwwfHx8MA%3D%3D",
      "/restaurant/ig3.jpg",
      "https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBlZGl0b3J8ZW58MHx8MHx8fDA%3D",
    ],
    bgGradient:
      "bg-[radial-gradient(circle,_rgba(246,252,255,1)_0%,_rgba(184,218,255,1)_100%)]",
    textColor: "text-[#3F72AF]",
  },
  {
    icon: <FaLaptopCode className="text-3xl" />,
    title: "Online Reservations",
    description:
      "Mobile-friendly websites with seamless booking integrations.",
    image: [
      "/restaurant/web1.png",
      "/restaurant/web2.png",
      "/restaurant/web3.png",
      "/restaurant/web4.png",
    ],
    bgGradient:
      "bg-[radial-gradient(circle,_rgba(243,255,251,1)_0%,_rgba(174,255,216,1)_100%)]",
    textColor: "text-[#05966E]",
  },
  {
    icon: <FaBullhorn className="text-3xl" />,
    title: "Ad Campaigns",
    description:
      "Targeted Meta & Google ads designed to fill tables, not waste budgets.",
    image: [
      "/restaurant/ads1.png",
      "https://elements-resized.envatousercontent.com/elements-cover-images/3563f665-d3b5-43f6-913f-96ba2beb63d7?w=710&cf_fit=scale-down&q=85&format=auto&s=786a9ad6b58adac55cf48cc534dfae4a44208091aec95674e29b693c32ce9966",
      "https://elements-resized.envatousercontent.com/elements-cover-images/b3f8f551-dd53-4e30-aff1-f431d1127f86?w=710&cf_fit=scale-down&q=85&format=auto&s=f26c55c66ba372a3fa3d346aba2a5468b978f0be0fa4d40d85cce22b0381679c",
      "/restaurant/ads4.png",
    ],
    bgGradient:
      "bg-[radial-gradient(circle,_rgba(255,250,240,1)_0%,_rgba(255,222,164,1)_100%)]",
    textColor: "text-[#D88C00]",
  },
  {
    icon: <FaVideo className="text-3xl" />,
    title: "Food Photography & Reels",
    description:
      "High-end visuals that make your dishes irresistible online.",
    image: [
      "/restaurant/media1.png",
      "https://images.unsplash.com/photo-1599249681583-2d4bbf25b5bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGZsYXRsYXklMjB2aWRlbyUyMHNob290fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1614598581129-af55950d0b80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGZsYXRsYXklMjB2aWRlbyUyMHNob290fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1717879206009-325b9eddd6c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDB8fDB8fHww",
    ],
    bgGradient:
      "bg-[radial-gradient(circle,_rgba(255,245,250,1)_0%,_rgba(255,182,218,1)_100%)]",
    textColor: "text-[#C43B77]",
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
                    We help restaurants & cafes build standout brands,
                    scroll-stopping content, and seamless websites that drive
                    real bookings.
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
