import React from "react";

const Support = () => {
    return (
        <div className="poppins-font sm:h-screen w-full ">
            <div className="max-w-4xl w-full mx-auto sm:p-0 p-5 ">
                <h1 className="poppins-font text-3xl  sm:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#04bcbe] to-[#056d90] ">
                    Always-On Support, <br />{" "}
                    <span className="text-black mt-3 inline-block"> Just Like Your Business</span>
                </h1>
                <p className="text-sm sm:text-md mt-5 opacity-90">
                    Running a restaurant or salon doesnt stop at 6 PM and
                    neither do we.
                </p>
            </div>
            <div className=" w-full sm:flex sm:flex-row flex flex-col-reverse  bg-[radial-gradient(circle,rgba(4,_188,_190,_1)_0%,_rgba(255,_255,_255,_1)_100%)] sm:h-[70%]  sm:mt-12">
                <div className="w-full sm:w-1/2 h-[100%]  ">
                    <img
                        className="h-full w-full object-cover mix-blend-multiply"
                        src="/support2.png"
                        alt=""
                    />
                </div>
                <div className="w-full sm:w-1/2 h-full flex flex-col items-center sm:items-start justify-center  gap-y-10 text-white">
                    <div className="sm:w-1/2 px-10 sm:p-0 mt-20 sm:mt-0">
                        <h2 className="text-3xl font-semibold">
                            24/7 Human Support
                        </h2>
                        <p className="text-md mt-1 ">
                            Real people. Real help. Anytime you need it via
                            WhatsApp, email, or call.
                        </p>
                    </div>
                    <div className="sm:w-1/2 w-full sm:p-0 px-10">
                        <h2 className="text-3xl font-semibold">
                            Fast Response Time
                        </h2>
                        <p className="text-md mt-1">
                            No ticket queues. No bots. Get answers when it
                            matters most.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
