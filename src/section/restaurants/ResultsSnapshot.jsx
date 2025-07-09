import React from "react";
import HighlightLoop from "../../component/HighlightLoop";
import Button from "../../component/Button";

const ResultsSnapshot = () => {
    return (
        <div className="poppins-font sm:h-screen w-full mt-15">
            <div className="max-w-5xl w-full mx-auto sm:p-0 p-5">
                <h1 className="poppins-font text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#04bcbe] to-[#056d90]">
                    <HighlightLoop text={"Measured Growth"} type={"circle"} />, Crafted for Restaurants
                </h1>
            </div>

            <div className="w-full sm:flex sm:flex-row flex gap-x-10 flex-col-reverse bg-[radial-gradient(circle,rgba(4,_188,_190,_1)_0%,_rgba(255,_255,_255,_1)_100%)] sm:h-[70%] sm:mt-12 gap-y-5 ">
                
                {/* Left Image */}
                <div className="w-full sm:w-1/2 h-full SM:p-2">
                    <img
                        className="h-full w-full object-contain mix-blend-multiply"
                        src="/restaurant/results.png" // Update the image path if needed
                        alt="Cafe Bloom Success Results"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full sm:w-1/2 h-full flex flex-col items-center sm:items-start justify-center gap-y-10 text-white">
                    <div className="sm:w-[80%] sm:px-10 px-5 sm:p-0 mt-20 sm:mt-0">
                        <h2 className="text-3xl font-semibold">
                            <HighlightLoop text="2× More Reservations" type={"highlight"} /> in Just 6 Weeks
                        </h2>
                        <p className="text-md my-6">
                           <HighlightLoop text=" Cafe Bloom" type={"underline"} /> doubled their online reservations after launching a fresh brand identity and a scroll-stopping Instagram content strategy. By aligning aesthetic appeal with data-driven tactics, we helped them turn traffic into tables.
                        </p>
                        <Button title={"Hungry for more orders? Book your free strategy call"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsSnapshot;
