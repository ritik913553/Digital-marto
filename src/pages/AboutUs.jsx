import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import IndividualMember from "../component/IndividualMember";
const AboutUs = () => {
    const positions = [
        "absolute z-100 h-120 w-75 text-center",
        "absolute z-90 h-90 w-75 left-30 top-12 text-center",
        "absolute z-80 h-70 w-75 left-60 top-22 text-center",
        "absolute z-70 h-50 w-75 left-80 top-30 text-center",
        "absolute z-60 h-40 w-75 left-90 top-35 text-center",
    ];
    const [individualOpen, setIndividualOpen] = useState(false);

    const [team, setTeam] = useState([
        {
            name: "Zahid Iqbal",
            role: "Founder & Creative Director",
            image: "https://media.istockphoto.com/id/1204237222/photo/serious-elegant-man-in-beige-suit-eyeglasses-sitting-in-blue-velour-armchair-and-pointing.jpg?s=612x612&w=0&k=20&c=ejnAqnJhzWteSScmWvSINUY4Hij32q4KlewEhcusJQc=",
            description:
                "Brand strategist, digital growth consultant, and the lead creative mind behind every project.",
            yearsOfExperience: 10,
            rating: 4.9,
        },
        {
            name: "Aanya Kapoor",
            role: "Design Head",
            image: "https://media.istockphoto.com/id/1169915812/photo/portrait-of-beautiful-asia-businesswoman-sitting-at-desk-and-working-with-laptop-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=dzrI7u9ThHHnsIZaiCPQ7XCK-Xly4jNb2KSIki72vrc=",
            description:
                "Obsessed with color, typography, and creating design systems that elevate brands.",
            yearsOfExperience: 7,
            rating: 4.8,
        },
        {
            name: "Rishi Mehta",
            role: "Social Media Lead",
            image: "https://media.istockphoto.com/id/1241309636/photo/a-young-beautiful-muslim-woman-with-brown-hair-in-a-black-blouse-and-black-leather-skirt-on-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=8j8gizBEXpTjehURt5fmdu_-YM-v0Wg0nB0Gn7hKB2k=",
            description:
                "Drives engagement with scroll-stopping content and performance-led strategies.",
            yearsOfExperience: 6,
            rating: 4.7,
        },
        {
            name: "Nidhi Sharma",
            role: "Web & UI/UX Developer",
            image: "https://images.unsplash.com/photo-1706090343923-cfa3240f8366?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Bringing clean, functional websites to life with user-first experiences.",
            yearsOfExperience: 5,
            rating: 4.8,
        },
        {
            name: "Priya Nair",
            role: "Growth & Client Success Manager",
            image: "https://images.unsplash.com/photo-1749476695941-e03f73d3c7e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Your go-to person for smooth onboarding, results tracking, and ongoing support.",
            yearsOfExperience: 8,
            rating: 4.9,
        },
    ]);
    const [index, setIndex] = useState(0);
    const [memberData, setMemberData] = useState(null);
    const handleRightShift = () => {
        setIndex((prevIndex) => (prevIndex + 1) % team.length);
        setTeam((prevTeam) => {
            if (prevTeam.length === 0) return prevTeam;
            const newTeam = JSON.parse(JSON.stringify(prevTeam));
            const first = newTeam.shift();
            newTeam.push(first);
            return newTeam;
        });
    };

    const handleLeftShift = () => {
        setIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);
        setTeam((prevTeam) => {
            if (prevTeam.length === 0) return prevTeam;
            const newTeam = [...prevTeam];
            const last = newTeam.pop();
            newTeam.unshift(last);
            return newTeam;
        });
    };

    useEffect(() => {
        document.title = "DigitalMato | AboutUs";
    }, []);

    if (individualOpen) {
        return (
            <IndividualMember
                member={memberData}
                setIndividualOpen={setIndividualOpen}
            />
        );
    } else {
        return (
            <div className="sm:h-screen bg-[linear-gradient(355deg,_rgba(164,223,224,1)_10%,_rgba(255,255,255,1)_80%)] h-[150vh] w-full poppins-font">
                <div className="max-w-5xl   p-2 sm:px-0  mx-auto h-full pt-25 overflow-hidden">
                    <div className="flex flex-col sm:flex-row w-full h-full sm:gap-x-5">
                        <div className=" bg-gradient-to-b from-blue-400 to-white rounded-xl sm:w-1/3 sm:h-full h-[30%] p-5 space-y-7  sm:space-y-15">
                            <h1 className=" text-5xl leading-15">
                                Meet the Brains Behind the Brands
                            </h1>
                            <p>
                                We're a small team with big ideas, turning
                                business visions into visual impact.
                            </p>
                        </div>
                        <div className="sm:w-2/3  sm:h-full h-[50%] flex flex-col justify-between">
                            {/* team data */}
                            <div className="relative w-full h-full  top-0 left-0  items-center justify-center">
                                {positions.map((pos, idx) => {
                                    const member = team[idx];
                                    // if (!member) return null;

                                    return (
                                        <div
                                            key={idx}
                                            className={`${pos}  transition-all duration-100`}
                                        >
                                            <img
                                                onClick={() => {
                                                    setIndividualOpen(true);
                                                    setMemberData(member);
                                                }}
                                                src={member?.image}
                                                className="h-[90%] w-full object-cover rounded-xl"
                                                alt={member?.name}
                                            />
                                            {idx === 0 && (
                                                <div className="mt-2 ">
                                                    <h1 className="text-lg font-bold">
                                                        {member?.name}
                                                    </h1>
                                                    <p className="text-sm">
                                                        {member?.role}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            {/* next ans counting */}
                            <div className="flex justify-between  pb-4 px-10">
                                <div className="flex gap-x-4">
                                    <button
                                        onClick={handleLeftShift}
                                        className="px-5 text-xl py-2 bg-gray-400 rounded-sm "
                                    >
                                        <FaArrowLeftLong />
                                    </button>
                                    <button
                                        onClick={handleRightShift}
                                        className="px-5 text-xl py-2 bg-gray-400 rounded-sm "
                                    >
                                        <FaArrowRightLong />
                                    </button>
                                </div>
                                <div className="text-4xl">{index + 1}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default AboutUs;
