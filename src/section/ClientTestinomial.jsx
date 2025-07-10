import React from "react";

const testimonials = [
    {
        name: "Joeshp Doe",
        role: "Founder, BloomBakery.in",
        quote: "I needed a website that felt as warm and personal as my cakes. The team nailed it — it’s mobile-first, fast, and beautiful.",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        image: "https://media.istockphoto.com/id/1204237222/photo/serious-elegant-man-in-beige-suit-eyeglasses-sitting-in-blue-velour-armchair-and-pointing.jpg?s=612x612&w=0&k=20&c=ejnAqnJhzWteSScmWvSINUY4Hij32q4KlewEhcusJQc=",
        metric: "⏱️ Site launched in 5 days",
    },
    {
        name: "Ananaya Pandey",
        role: "Owner, Café Fernweh",
        quote: "They helped me rebrand completely — from logo to packaging. Now my café actually looks as premium as the coffee tastes.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        image: "https://media.istockphoto.com/id/1169915812/photo/portrait-of-beautiful-asia-businesswoman-sitting-at-desk-and-working-with-laptop-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=dzrI7u9ThHHnsIZaiCPQ7XCK-Xly4jNb2KSIki72vrc=",
        metric: "🎨 Brand kit delivered in 3 days",
    },
    {
        name: "Rani Roi",
        role: "Nutrition Coach @Rani",
        quote: "Their reels and posts doubled my engagement in 2 weeks. I even got 3 new coaching clients from Instagram.",
        avatar: "https://media.istockphoto.com/id/2060433249/photo/photo-of-young-girl-wearing-t-shirt-isolated-yellow-background-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=hk99PC5UEh5LemwxdHqRKrFCVEu2eKuL4W9t0n74mfU=",
        image: "https://media.istockphoto.com/id/1241309636/photo/a-young-beautiful-muslim-woman-with-brown-hair-in-a-black-blouse-and-black-leather-skirt-on-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=8j8gizBEXpTjehURt5fmdu_-YM-v0Wg0nB0Gn7hKB2k=",
        metric: "📈 +92% IG reach",
    },
    {
        name: "John Doe",
        role: "Digital Product Marketer",
        quote: "We spent less, but reached more. Their SEO and paid ads strategy brought us leads at half the cost.Amazing!",
        avatar: "https://media.istockphoto.com/id/1303206644/photo/portrait-of-smiling-caucasian-man-pose-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=akRiOpll6XSlduMj09n9Zm11SsRpAjtdr85GbGJ99uM=",
        image: "https://images.unsplash.com/photo-1706090343923-cfa3240f8366?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        metric: "💰 2x ROI in 30 days",
    },
];

const ClientTestinomial = () => {
    return (
        <div className="poppins-font p-1 sm:p-0 sm:h-screen w-screen overflow-hidden">
            <div className="max-w-5xl mx-auto mt-15">
                <h1 className="text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#04bcbe] to-[#056d90] font-bold">
                    We Build Sites, Brands, and Growth Campaigns <br />
                    <span className=" text-black mt-2 inline-block">
                         Our Clients Build Trust in Us
                    </span>
                </h1>

                {/* Rating Section */}
                <div className="flex flex-col items-center mt-2 text-sm">
                    <div className="flex items-center">
                        {/* Stars - smaller size (w-5 h-5) */}
                        <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-5 h-5 ${
                                        i < 4
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                    }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    {i === 4 && (
                                        <defs>
                                            <linearGradient
                                                id="partialFill"
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="0%"
                                            >
                                                <stop
                                                    offset="60%"
                                                    stopColor="#fbbf24"
                                                />
                                                <stop
                                                    offset="60%"
                                                    stopColor="#d1d5db"
                                                />
                                            </linearGradient>
                                        </defs>
                                    )}
                                    <path
                                        fill={
                                            i === 4
                                                ? "url(#partialFill)"
                                                : "currentColor"
                                        }
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>
                            ))}
                        </div>
                        {/* Rating Text */}
                        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#04bcbe] to-[#056d90]">
                            4.6
                        </span>
                        <span className="text-gray-600 ml-1">out of 5</span>
                    </div>
                    <p className="text-gray-500 mt-1">
                        Based on 100+ client reviews
                    </p>
                </div>

                {/* Testinomial Section */}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 p-5 sm:p-0">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-[#f1f5f9] hover:scale-105 duration-300 transition-all ease-in-out overflow-hidden p-6 rounded-lg shadow-md group"
                            style={{
                                backgroundImage: `linear-gradient(178deg, rgba(246,255,252,1) 10%, rgba(33,171,176,1) 64%, rgba(8,154,199,1) 100%)`,
                            }}
                        >
                            {/* Background image that appears on hover */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                }}
                            />

                            {/* Content container with z-index to appear above background */}
                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={item.avatar}
                                        alt="Client"
                                        className="w-16 h-16 rounded-full object-cover border-2 border-white"
                                    />
                                </div>

                                <div className="flex flex-col gap-y-20 items-end justify-end">
                                    {/* Quote that disappears on hover */}
                                    <p className="text-gray-700 italic text-sm group-hover:opacity-0 transition-opacity duration-300">
                                        "{item.quote}"
                                    </p>

                                    <div className="flex flex-col items-start justify-center gap-y-0 overflow-hidden">
                                       <h1 className="text-xl font-semibold group-hover:text-white">{item.name}</h1>
                                        <p className="text-sm text-glow group-hover:text-white transition-colors duration-300">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ClientTestinomial;
