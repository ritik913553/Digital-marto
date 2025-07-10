import React from "react";

const teamMembers = [
    {
        name: "Name",
        designation: "Designation",
        image: "https://via.placeholder.com/100", // Replace with actual image URLs
        bgColor: "bg-teal-700",
    },
    {
        name: "Name",
        designation: "Designation",
        image: "https://via.placeholder.com/100",
        bgColor: "bg-green-500",
    },
    {
        name: "Name",
        designation: "Designation",
        image: "https://via.placeholder.com/100",
        bgColor: "bg-green-500",
    },
    {
        name: "Name",
        designation: "Designation",
        image: "https://via.placeholder.com/100",
        bgColor: "bg-teal-700",
    },
    {
        name: "Name",
        designation: "Designation",
        image: "https://via.placeholder.com/100",
        bgColor: "bg-green-500",
    },
];

const OurTeam = () => {
    return (
        <section className="sm:p-10 p-5 bg-white text-gray-800 max-w-5xl mx-auto pt-25 sm:pt-25 ">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#04bcbe] to-[#056d90]  mb-2">
                Meet the Brains Behind the Brands
            </h2>
            <p className="text-md opacity-85">
                We're a small team with big ideas, turning business visions into
                visual impact.
            </p>
            <div className="grid  sm:p-0 grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div className="flex items-center gap-5">
                    <div className="relative w-92 h-32 sm:w-80 sm:h-40">
                        <div
                            className={`absolute rounded-full w-32 h-32 bg-[#1F809B] -bottom-5 -left-2 sm:-left-10`}
                        ></div>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                            alt=""
                            className="rounded-full z-20 relative w-full h-full object-cover  border-4 border-white"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold"> Zahid Iqbal​</h3>
                        <p className="text-gray-500">Founder & CEO</p>
                        <p className="text-sm mt-1 text-gray-600">
                            Brand strategist, digital growth consultant, and the
                            lead creative mind behind every project.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="relative  w-92 h-32 sm:w-80 sm:h-40">
                        <div
                            className={`absolute rounded-full w-32 h-32 bg-green-500 sm:-top-5 -top-4 -left-2 sm:-left-7`}
                        ></div>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                            alt=""
                            className="rounded-full z-20 relative w-full h-full object-cover  border-4 border-white"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">
                            {" "}
                            Aanya Kapoor​
                        </h3>
                        <p className="text-gray-500">Design Head​</p>
                        <p className="text-sm mt-1 text-gray-600">
                            Obsessed with color, typography, and creating design
                            systems that elevate brands.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-5 sm:gap-9">
                    <div className="relative  w-92 h-32 sm:w-80 sm:h-40 ">
                        <div
                            className={`absolute rounded-full w-32 h-32 bg-green-500 -top-5 -right-4 sm:-right-7`}
                        ></div>
                        <img
                            src="https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
                            alt=""
                            className="rounded-full z-20 relative w-full h-full object-cover  border-4 border-white"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold"> Rishi Mehta</h3>
                        <p className="text-gray-500">Social Media Lead​​</p>
                        <p className="text-sm mt-1 text-gray-600">
                            Drives engagement with scroll-stopping content and
                            performance-led strategies.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-5 sm:gap-9">
                    <div className="relative w-72 h-32 sm:w-65 sm:h-40">
                        <div
                            className={`absolute rounded-full w-32 h-32 bg-[#1F809B] -top-3 sm:-top-5 -right-4 sm:-right-7`}
                        ></div>
                        <img
                            src="https://images.unsplash.com/photo-1551438632-e8c7d9a5d1b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D"
                            alt=""
                            className="rounded-full z-20 relative w-full h-full object-cover  border-4 border-white"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">
                            {" "}
                            Nidhi Sharma​
                        </h3>
                        <p className="text-gray-500">Web & UI/UX Developer​​</p>
                        <p className="text-sm mt-1 text-gray-600">
                            Bringing clean, functional websites to life with
                            user-first experiences.
                        </p>
                    </div>
                </div>
                <div className="flex  items-center  gap-5">
                    <div className="relative w-92 h-32 sm:w-80 sm:h-40">
                        <div
                            className={`absolute rounded-full w-32 h-32 bg-green-500 -top-3 sm:-top-5 -left-4 sm:-left-7`}
                        ></div>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                            alt=""
                            className="rounded-full z-20 relative w-full h-full object-cover  border-4 border-white"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold"> Priya Nair​</h3>
                        <p className="text-gray-500">
                            Growth & Client Success Manager​​​
                        </p>
                        <p className="text-sm mt-1 text-gray-600">
                            Obsessed with color, typography, and creating design
                            systems that elevate brands.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
