import React from "react";
import Button from "../../component/Button";
import HighlightLoop from "../../component/HighlightLoop";
const ResultsSnapshot = () => {
    return (
        <div className="poppins-font sm:h-screen w-full pt-15 ">
            <div className="max-w-5xl w-full mx-auto sm:p-0 p-5 ">
                <h1 className="poppins-font text-3xl  sm:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#04bcbe] to-[#056d90] ">
                    <HighlightLoop text={"Real Results"} type={"circle"} />, Beautifully Delivered <br />{" "}
                </h1>
            </div>
            <div className=" w-full sm:flex sm:flex-row flex gap-x-10 flex-col-reverse  bg-[radial-gradient(circle,rgba(4,_188,_190,_1)_0%,_rgba(255,_255,_255,_1)_100%)] sm:h-[70%]  sm:mt-12">
                <div className="w-full sm:w-1/2 h-[100%]  p-2">
                    <img
                        className="h-full w-full object-cover  mix-blend"
                        src="/salon/results.png"
                    />
                </div>
                <div className="w-full sm:w-1/2 h-full flex flex-col items-center sm:items-start justify-center  gap-y-10 text-white">
                    <div className="sm:w-[80%] sm:px-10 px-5 sm:p-0 mt-20 sm:mt-0">
                       
                        <h2 className="sm:text-3xl text-2xl font-semibold">
                            <HighlightLoop text="3× More Online Bookings" type={"highlight"} /> in Just 45 Days
                        </h2>
                        <p className="sm:text-md text-sm my-6 ">
                            After launching their custom brand kit and ad funnel
                            with us, <HighlightLoop text=" ZenGlow Spa" type={"underline"} /> experienced a dramatic uplift
                            in online appointment bookings. Their new look,
                            messaging, and social presence built instant trust —
                            and it showed in the results.
                        </p>
                        <div className="sm:w-2/3 w-full mx-auto"><Button title={"Get a Free Visual Checkup"} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsSnapshot;
