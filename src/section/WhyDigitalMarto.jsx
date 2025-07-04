import React from "react";

const WhyDigitalMarto = () => {
    return (
        <div className="poppins-font w-full py-10">
            <div className="max-w-4xl mx-auto sm:p-0 p-5">
                <div className="flex sm:flex-row flex-col justify-between ">
                    <div className="flex flex-col justify-center w-full sm:w-1/2">
                        <h1 className="text-3xl leading-10 sm:leading-12  sm:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#04bcbe] to-[#056d90]">
                            Why Digitalmato?
                        </h1>
                        <p className="text-sm sm:text-md mt-5 opacity-90">
                            Because generic agencies dont get your world. We
                            speak your language design that converts, content
                            that connects.
                        </p>
                    </div>
                    <div className="sm:w-1/2 ">
                        <img
                            src="./WhyDigital.png"
                            className="w-full " 
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyDigitalMarto;
