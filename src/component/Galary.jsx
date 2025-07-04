import React from "react";

const Galary = ({item}) => {
    return <div className="h-32 sm:h-52 shrink-0 w-full bg-[#AEE2E3] rounded-xl overflow-hidden">
        {item.image ? <img src={item.image} className="h-full w-full object-cover" /> : <video src={item.video} autoPlay loop muted className="h-full w-full object-cover" />}
    </div>;
};

export default Galary;
