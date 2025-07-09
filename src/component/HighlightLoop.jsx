import React, { useState, useEffect } from "react";
import { RoughNotation } from "react-rough-notation";

export default function HighlightLoop({ text, type }) {
    const [showHighlight, setShowHighlight] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowHighlight(false); // Hide
            setTimeout(() => setShowHighlight(true), 100);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <RoughNotation
            type={type}
            show={showHighlight}
            color="#03414e"
            animationDuration={800}
        >
            <span className="font-bold inline-block ">{text}</span>
        </RoughNotation>
    );
}
