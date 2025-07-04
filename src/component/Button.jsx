import React from "react";

const Button = ({ title ,color }) => {
    return (
        <div
            className={`p-[2px] rounded-full 
            transition-all duration-300 bg-[#002646]
           `}
        >
            <button
                className="px-6 py-2 w-full h-full 
            rounded-full 
            text-white
            font-black            
             "
           
            >
                {title}
            </button>
        </div>
    );
};

export default Button;




//  <div
//             className={`p-[2px] rounded-full 
//             transition-all duration-300 
//             hover:scale-108 ${color ? `${color}` : "bg-gradient-to-r "} from-[#04bcbe] to-[#8bcfe6] inline-block shadow-[0_4px_30px_rgba(0,0,0,0.1)]`}
//         >
//             <button
//                 className="px-6 py-2 w-full h-full 
//             rounded-full 
//             backdrop-blur-md 
//             bg-white/10 
//             text-white 
//             font-black            
//             shadow-inner shadow-white/50
//             border border-white"
//             >
//                 {title}
//             </button>
//         </div>