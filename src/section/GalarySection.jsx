import React from "react";
import Galary from "../component/Galary";
import { motion } from "framer-motion";

// const feature1 = [
//     {
//         image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     { video: "/videos/video2.mp4" },
//     {
//         image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     { video: "/videos/video1.mp4" },
//     {
//         image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
//     },
// ];
// const feature2 = [
//     { video: "/videos/video7.mp4" },
//     {
//         image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
//     },
//     { video: "/videos/video6.mp4" },
//     {
//         image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
//     },
// ];
// const feature3 = [
//     {
//         image: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3JzfGVufDB8fDB8fHww",
//     },
//     { video: "/videos/video4.mp4" },
//     {
//         image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3JzfGVufDB8fDB8fHww",
//     },
//     { video: "/videos/video3.mp4" },
// ];
// const feature4 = [
//     {
//         image: "https://media.istockphoto.com/id/1678319628/photo/woman-getting-hair-style-and-hair-dry-at-beauty-salon.webp?a=1&b=1&s=612x612&w=0&k=20&c=FWjOAo3Og_FCE_wlbypmfFiWG9FdvUtmNzqN3ITUoHE=",
//     },
//     { video: "/videos/video2.mp4" },
//     {
//         image: "https://media.istockphoto.com/id/623477902/photo/man-gets-a-haircut-at-his-barber.webp?a=1&b=1&s=612x612&w=0&k=20&c=bq6lyLgA_yEYG4hbw9RgfRwB1U-E_uOO09xqnXc5Yuo=",
//     },
// ];
// const feature5 = [
//     { video: "/videos/video1.mp4" },
//     {
//         image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3JzfGVufDB8fDB8fHww",
//     },
//     { video: "/videos/video5.mp4" },
// ];
// const feature6 = [
//     {
//         image: "https://media.istockphoto.com/id/2163878765/photo/indian-asian-teenage-boy-studying-using-computer-headphones-smartphone-for-online-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=vn8S28sFNk64I3VgH2QGohn_BSliojk9_BbNlkhfX_A=",
//     },
// ];
// const feature7 = [
//     {
//         image: "https://media.istockphoto.com/id/1225395022/photo/young-adult-working-from-home-during-covid-19-quarantine-lockdown.webp?a=1&b=1&s=612x612&w=0&k=20&c=IoKdbf4k3edU7IWtoP98J4QFxVizVRC6Zrkxzf_2HFE=",
//     },
// ];

const feature1 = [
    { image: "" },
    { video: "" },
    { image: "" },
    { video: "" },
    { image: "" },
];
const feature2 = [
    { video: "" },
    { image: "" },
    { video: "" },
    { image: "" },
];
const feature3 = [
    { image: "" },
    { video: "" },
    { image: "" },
    { video: "" },
];
const feature4 = [
    { image: "" },
    { video: "" },
    { image: "" },
];
const feature5 = [
    { video: "" },
    { image: "" },
    { video: "" },
];
const feature6 = [
    { image: "" },
];
const feature7 = [
    { image: "" },
];

const GalarySection = () => {
    return (
        <div className="relative w-full h-[80vh] sm:h-[150vh] bg-[#AEE2E3] flex items-center justify-center ">
            <div className=" absolute w-[100%] sm:w-[85%] h-[68vh] sm:h-[150vh] sm:rounded-full bg-gray-200 bottom-0 sm:-top-20 left-1/2 transform -translate-x-1/2 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-72 z-30 pointer-events-none">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1440 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 left-0 w-full h-full"
                    style={{ display: "block" }}
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient
                            id="waveGradient"
                            x1="0"
                            y1="128"
                            x2="0"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#AEE2E3" stopOpacity="0.6" />
                            <stop
                                offset="1"
                                stopColor="#E5E7EB"
                                stopOpacity="0.1"
                            />
                        </linearGradient>
                    </defs>
                    <path
                        d="
        M0,64
        C360,128 1080,0 1440,64
        L1440,128
        L0,128
        Z
      "
                        fill="url(#waveGradient)"
                        style={{ filter: "blur(2px)" }}
                    />
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-12 h-[50%] backdrop-blur-[1px] z-30 bg-[#AEE2E3]/20"></div>
            <div className="absolute bottom-0 right-0 w-12 h-[50%] backdrop-blur-[1px] z-30 bg-[#AEE2E3]/20"></div>

            <div className="relative  z-20 h-full  overflow-hidden">
                <div className="flex wrap-nowrap gap-3 justify-center items-end h-full p-2 sm:p-10 mr-0 sm:mr-4 overlow-hidden  scrollbar-thin scrollbar-thumb-[#AEE2E3]/50 scrollbar-track-transparent">
                    <div className="rounded-lg  sm:block shadow-md  sm:w-72 w-32 min-w-[7rem] h-[40vh] sm:h-[90vh] sm:min-w-[14rem] flex items-center justify-center flex-col gap-y-4 overflow-hidden">
                        <motion.div
                            className="flex flex-col gap-y-4"
                            animate={{ y: [0, "20%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 10,
                                ease: "linear",
                            }}
                        >
                            {[...feature6, ...feature6, ...feature6].map(
                                (item, index) => (
                                    <Galary item={item} key={index} />
                                )
                            )}
                        </motion.div>
                    </div>
                    <div className="rounded-lg shadow-md sm:w-72 w-32 min-w-[7rem] h-[50vh] sm:h-[100vh] sm:min-w-[14rem] flex items-center justify-center flex-col gap-y-4 overflow-hidden">
                        <motion.div
                            className="flex flex-col gap-y-4"
                            animate={{ y: [0, "-20%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 8,
                                ease: "linear",
                            }}
                        >
                            {[...feature5, ...feature5,...feature5].map((item, index) => (
                                <Galary item={item} key={index} />
                            ))}
                        </motion.div>
                    </div>
                    <div className="rounded-lg shadow-md sm:w-72 w-32 min-w-[7rem] h-[70vh] sm:h-[120vh] sm:min-w-[14rem] flex items-center justify-center flex-col gap-y-4 overflow-hidden">
                        <motion.div
                            className="flex flex-col gap-y-4"
                            animate={{ y: [0, "20%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 6,
                                ease: "linear",
                            }}
                        >
                            {[...feature2, ...feature2,...feature2].map((item, index) => (
                                <Galary item={item} key={index} />
                            ))}
                        </motion.div>
                    </div>
                    <div className="rounded-lg  shadow-md sm:w-72 w-32 min-w-[7rem] h-[100vh] sm:h-[150vh] sm:min-w-[14rem] flex items-center justify-center flex-col gap-y-4 overflow-hidden">
                        <motion.div
                            className="flex flex-col gap-y-4"
                            animate={{ y: [0, "-20%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 12,
                                ease: "linear",
                            }}
                        >
                            {[...feature1, ...feature1, ...feature1].map(
                                (item, index) => (
                                    <Galary item={item} key={index} />
                                )
                            )}
                        </motion.div>
                    </div>
                    <div className="rounded-lg shadow-md sm:w-72 w-32 min-w-[7rem] h-[70vh] sm:h-[120vh] sm:min-w-[14rem] flex items-center justify-center flex-col gap-y-4 overflow-hidden">
                        <motion.div
                            className="flex flex-col gap-y-4"
                            animate={{ y: [0, "20%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 7,
                                ease: "linear",
                            }}
                        >
                            {[...feature3, ...feature3,...feature3].map((item, index) => (
                                <Galary item={item} key={index} />
                            ))}
                        </motion.div>
                    </div>
                    <div className="rounded-lg shadow-md sm:w-72 w-32 min-w-[7rem]  h-[50vh] sm:h-[100vh] sm:min-w-[14rem] flex items-center justify-center flex-col gap-y-4 overflow-hidden">
                        <motion.div
                            className="flex flex-col gap-y-4"
                            animate={{ y: [0, "-20%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 9,
                                ease: "linear",
                            }}
                        >
                            {[...feature4, ...feature4,...feature4].map((item, index) => (
                                <Galary item={item} key={index} />
                            ))}
                        </motion.div>
                    </div>
                    <div className="rounded-lg shadow-md sm:w-72 w-32 min-w-[7rem]  h-[40vh] sm:h-[90vh] sm:min-w-[14rem] flex items-center justify-center flex-col gap-y-4 overflow-hidden">
                        <motion.div
                            className="flex flex-col gap-y-4"
                            animate={{ y: [0, "20%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 11,
                                ease: "linear",
                            }}
                        >
                            {[...feature7, ...feature7, ...feature7].map(
                                (item, index) => (
                                    <Galary item={item} key={index} />
                                )
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalarySection;
