import React from "react";
import { RxCross1 } from "react-icons/rx";
const IndividualMember = ({ member, setIndividualOpen }) => {
    console.log(member);
    return (
        <div className="relative w-full sm:h-screen sm:p-25 pt-25 px-3 poppins-font">
            <span
                onClick={() => setIndividualOpen(false)}
                className="absolute text-2xl sm:text-3xl cursor-pointer top-25 sm:top-20 right-2 sm:right-10"
            >
                <RxCross1 />
            </span>
            <h1 className="text-center text-5xl mt-10 sm:mt-0">
                {member.name} <span className="text-2xl"> {member.role}</span>
            </h1>
            <div className="flex sm:flex-row flex-col h-full mt-5">
                <div className="sm:w-1/2 h-full">
                    {" "}
                    <img
                        src={member.image}
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>
                <div className="sm:w-1/2 h-full p-5 sm:p-10 bg-gray-300 flex justify-between flex-col gap-y-20">
                    <p>{member.description}</p>
                    <div className="flex gap-x-15">
                        <div className="flex flex-col gap-y-2">
                            <h1 className="text-6xl">{member.yearsOfExperience}</h1>
                            <p className="text-sm">Years of Experience</p>
                        </div>
                         <div className="flex flex-col gap-y-2">
                            <h1 className="text-6xl">{member.rating}</h1>
                            <p className="text-sm"> Rated By client</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualMember;
