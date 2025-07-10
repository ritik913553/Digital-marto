import React from "react";

const Button = ({ title, color }) => {
    return (
        <div
            className={`p-[2px] rounded-full 
            transition-all duration-300 bg-[#002646]
           `}
        >
            <a
                href={`https://wa.me/+918709822926`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {" "}
                <button className="px-6 py-2 w-full h-full rounded-full  text-white font-black             ">
                    {title}
                </button>
            </a>
        </div>
    );
};

export default Button;

