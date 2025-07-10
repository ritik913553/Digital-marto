import React from "react";
import HighlightLoop from "../../component/HighlightLoop";
import Button from '../../component/Button'

const ResultsSnapshot = () => {
    return (
        <div className="poppins-font sm:h-screen w-full mt-15">
            <div className="max-w-5xl w-full mx-auto sm:p-0 p-5">
                <h1 className="poppins-font text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#04bcbe] to-[#056d90]">
                    <HighlightLoop text={"Smarter Funnels"} type={"circle"} />,
                    Sharper Results
                </h1>
            </div>

            <div className="w-full sm:flex sm:flex-row flex gap-x-10 flex-col-reverse bg-[radial-gradient(circle,rgba(4,_188,_190,_1)_0%,_rgba(255,_255,_255,_1)_100%)] sm:h-[70%] sm:mt-12">
                {/* Left Image */}
                <div className="w-full sm:w-1/2 h-full p-2">
                    <img
                        className="h-full w-full object-cover mix-blend-multiply"
                        src="/edtech/results.png" // Update the image path if needed
                        alt="Cafe Bloom Success Results"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full sm:w-1/2 h-full flex flex-col items-center sm:items-start justify-center gap-y-10 text-white">
                    <div className="sm:w-[80%] sm:px-10 px-5 sm:p-0 mt-20 sm:mt-0">
                        <h2 className="text-2xl sm:text-3xl font-semibold">
                            <HighlightLoop
                                text="56% More Demo Signups"
                                type={"highlight"}
                            />{" "}
                            After a Strategic Revamp
                        </h2>
                        <p className="text-md my-6">
                            <HighlightLoop text="EduSpark" type={"underline"} />{" "}
                            saw a significant rise in conversions after we
                            redesigned their landing experience and automated
                            their email nurturing journey.
                        </p>
                       <div className="sm:w-2/3 w-full px-0 mx-auto"> <Button title="Get Your Free EdTech Audit" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsSnapshot;
