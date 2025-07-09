import { Sparkles, ImageIcon, Ban } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
const IndustryGaps = () => {
    const gapPoints = [
        {
            icon: <Ban size={30} className="text-[#03414e]" />,
            title: "Outdated Menus & Visuals",
            desc: "Static PDFs and inconsistent branding weaken trust before guests even arrive.",
        },
        {
            icon: <ImageIcon size={30} className="text-[#03414e]" />,
            title: "Inconsistent Instagram",
            desc: "Low-quality posts and unclear messaging lose hungry customers fast.",
        },
        {
            icon: <Sparkles size={30} className="text-[#03414e]" />,
            title: "No Online Bookings",
            desc: "Missing integrations mean missed reservations and lost revenue.",
        },
    ];

    return (
        <section className="relative w-full bg-gradient-to-b  to-white py-20 px-6 sm:px-16">
            <div className="max-w-5xl mx-auto ">
                {/* Heading */}
                <h2 className="text-4xl sm:text-4xl font-bold text-[#012646] mb-10">
                    Why Most Restaurant Marketing Falls Flat ?
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14  h-auto">
                    {gapPoints.map((item, index) => {
                        let animation = {};
                        if (index === 0) {
                            animation = {
                                initial: { opacity: 0, x: "-100%" },
                                whileInView: { opacity: 1, x: 0 },
                            };
                        } else if (index === 1) {
                            animation = {
                                initial: { opacity: 0, y: "100%" },
                                whileInView: { opacity: 1, y: 0 },
                            };
                        } else if (index === 2) {
                            animation = {
                                initial: { opacity: 0, x: "100%" },
                                whileInView: { opacity: 1, x: 0 },
                            };
                        }

                        return (
                            <div className="overflow-hidden p-2 h-auto">
                                {" "}
                                <motion.div
                                    {...animation}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: .8,
                                        ease: "linear",
                                    }}
                                    key={index}
                                    className="flex  flex-col items-start h-full justify-center  bg-transparent backdrop-blur-md border-1 border-[#AEE2E3]  rounded-lg p-3 sm:p-5 transition-transform duration-300 hover:scale-105  sm:shadow-[3px_3px_2px_2px_#AEE2E3] shadow-[1px_1px_1px_1px_#AEE2E3] gap-y-2"
                                >
                                    <div className="mb-4">{item.icon}</div>
                                    <h1 className="text-2xl  font-semibold">
                                        {item.title}
                                    </h1>
                                    <p className="text-gray-80 text-xs sm:text-sm ">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

                <p className="text-[#03414e] text-base sm:text-lg leading-relaxed mt-20 mx-auto">
                    Most restaurant marketing is a recipe for confusion, not
                    conversion.
                </p>
            </div>
        </section>
    );
};

export default IndustryGaps;
