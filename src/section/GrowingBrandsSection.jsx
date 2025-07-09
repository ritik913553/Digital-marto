import React from "react";
import Button from "../component/Button";
import {
    Brain,
    ChartLine,
    Dribbble,
    HandCoins,
    Heart,
    Lightbulb,
    Monitor,
    Rocket,
    Search,
    Video,
} from "lucide-react";
import { motion } from "framer-motion";

const ICONS = [
    { icon: <Monitor size={32} />, angle: 0 },
    { icon: <Dribbble size={32} />, angle: 30 },
    { icon: <Brain size={32} />, angle: 60 },
    { icon: <ChartLine size={32} />, angle: 90 },
    { icon: <Search size={32} />, angle: 120 },
    { icon: <Lightbulb size={32} />, angle: 150 },
    { icon: <Rocket size={32} />, angle: 180 },
    { icon: <Dribbble size={32} />, angle: 210 },
    { icon: <Brain size={32} />, angle: 240 },
    { icon: <Video size={32} />, angle: 270 },
    { icon: <Heart size={32} />, angle: 300 },
    { icon: <HandCoins size={32} />, angle: 330 },
];

const GrowingBrandsSection = () => {
    const ringDiameter = 800;
    const radius = ringDiameter / 2 - 40; // padding from edge

    return (
        <div className=" bg-gradient-to-b from-white to-[#6dedf7] ">
            <div className="poppins-font relative   sm:h-screen h-[70vh] w-full bg-gradient-to-b from-white to-[#6dedf7] overflow-hidden flex items-center justify-center">
                {/* CTA Content in center */}
                <motion.div
                    initial={{ opacity: 0, y: "50vh" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute z-10 w-full h-full py-15 flex flex-col items-center justify-end text-center"
                >
                    <img
                        className="h-28 w-28 scale-110 mb-4"
                        src="./logo1.png"
                        alt="Logo"
                    />
                    <h1 className="text-3xl font-bold">
                        Join 100+ Growing Brands
                    </h1>
                    <p className="text-sm w-72 my-5 text-center">
                        We’ve helped local businesses go global and we can do
                        the same for you.
                    </p>
                    <Button title="Get Started Now" />
                </motion.div>

                {/* Large Rotating Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className={`hidden sm:block absolute traslate-y-1/2  -translate-x-1/2 rounded-full `}
                    style={{
                        width: `${ringDiameter}px`,
                        height: `${ringDiameter}px`,
                        bottom: "-40%",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    {ICONS.map(({ icon, angle }, index) => {
                        const rad = (angle * Math.PI) / 180;
                        const x = radius * Math.cos(rad);
                        const y = radius * Math.sin(rad);

                        return (
                            <div
                                key={index}
                                className="absolute bg-white shadow-md p-3 rounded-full"
                                style={{
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                {icon}
                            </div>
                        );
                    })}
                </motion.div>
            </div>
            <div className="sm:hidden flex flex-col gap-y-3">
                <div className="flex overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: -400 }}
                        transition={{
                            ease: "linear",
                            repeat: Infinity,
                            duration: 5,
                        }}
                        className="flex"
                    >
                        {[...ICONS, ...ICONS].map(({ icon, index }) => (
                            <div
                                key={index}
                                className="p-4 shrink-0 bg-white flex  rounded-lg ml-3"
                            >
                                {icon}
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="flex overflow-hidden">
                    <motion.div
                        initial={{ x: -400 }}
                        animate={{ x: 0 }}
                        transition={{
                            ease: "linear",
                            repeat: Infinity,
                            duration: 5,
                        }}
                        className="flex"
                    >
                        {[...ICONS, ...ICONS].map(({ icon, index }) => (
                            <div
                                key={index}
                                className="p-4 shrink-0 bg-white flex  rounded-lg ml-3"
                            >
                                {icon}
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default GrowingBrandsSection;
