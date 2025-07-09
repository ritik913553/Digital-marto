import React, { useEffect, useRef, useState } from "react";

const Galary = ({ item }) => {
    const mediaRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // stop observing once visible
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (mediaRef.current) observer.observe(mediaRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={mediaRef}
            className="rounded-lg h-32 sm:h-52  shrink-0 overflow-hidden bg-[#7cdddf] shadow-lg w-full"
        >
            {item.image && (
                <img
                    src={item.image}
                    alt="gallery item"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            )}
            {item.video &&
                (isVisible ? (
                    <video
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">
                        Loading...
                    </div>
                ))}
        </div>
    );
};

export default Galary;
