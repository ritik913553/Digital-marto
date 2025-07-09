import React from "react";

const statsData = [
    { metric: "🚀 Projects Delivered", value: "120+" },
    { metric: "🏆 Client Retention Rate", value: "96%" },
    { metric: "🌍 Industries Served", value: "4+" },
    { metric: "💼 Active Clients", value: "45+" },
];

const StatsSection = () => {
    return (
        <div className="relative  w-full h-[70vh] sm:h-screen bg-[#f1f5f9] flex flex-col items-center justify-center text-center">
            {/* Background Image */}
            <div className="absolute  z-10 bottom-0 left-0 w-full h-[90%] 
            bg-cover bg-[url(/mountain.jpg)]" />

            {/* Blurred Top Overlay */}
            <div className="absolute z-20 top-0 left-0 w-full h-42 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-b from-[#AFE3E3]/100 to-transparent backdrop-blur-md"></div>
            </div>

            {/* Stats Content */}
            <div className="  poppins-font grid grid-cols-2   md:grid-cols-2 lg:grid-cols-4 gap-8 z-30 relative -top-15 sm:-top-30 sm:w-[85%] w-full p-2 sm:p-0">
                {statsData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start justify-center  bg-transparent backdrop-blur-md border-1 border-[#AEE2E3]  rounded-lg p-3 sm:p-6 transition-transform duration-300 hover:scale-105  sm:shadow-[3px_3px_2px_2px_#AEE2E3] shadow-[1px_1px_1px_1px_#AEE2E3] "
                    >
                        <h1 className="text-2xl sm:text-3xl font-bold">{item.value}</h1>
                        <p className="text-gray-80 text-xs sm:text-sm ">{item.metric}</p>
                    </div>
                ))}
            </div>

            <div className="poppins-font  z-30">
                <h1 className="text-3xl sm:text-5xl w-full sm:w-[80%] mx-auto leading-10 sm:leading-14 font-bold text-white">
                    Growing your business shouldn’t be guesswork.
                </h1>
                <h1 className="text-2xl sm:text-4xl text-white font-bold mt-6 sm:mt-2">
                    {" "}
                    We make digital simple.
                </h1>
                {/* <p className="w-1/2 mx-auto mt-10 text-white backdrop:blur-2xl ">
                    Whether you're running a salon, launching a course, or
                    managing a restaurant — we bring digital tools that simplify
                    your work and multiply your growth.
                </p> */}
            </div>
        </div>
    );
};

export default StatsSection;
