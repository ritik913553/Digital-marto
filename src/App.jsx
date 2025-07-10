import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./section/Navbar";
import { FaWhatsappSquare } from "react-icons/fa";
import React, { Suspense, lazy } from "react";
import ContactSection from "./section/ContactSection";
import OurTeam from "./pages/OurTeam";
const Home = lazy(() => import("./pages/Home"));
const Restaurants = lazy(() => import("./pages/Restaurants"));
const Salon = lazy(() => import("./pages/Salon"));
const Edtech = lazy(() => import("./pages/Edtech"));
const InteriorDesigne = lazy(() => import("./pages/InteriorDesigne"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Suspense
                fallback={
                    <div className="text-center py-20 text-xl">Loading...</div>
                }
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/restaurants" element={<Restaurants />} />
                    <Route path="/salon" element={<Salon />} />
                    <Route path="/edtech" element={<Edtech />} />
                    <Route
                        path="/interior-designe"
                        element={<InteriorDesigne />}
                    />
                    <Route path="/our-team" element={<OurTeam />} />
                </Routes>
            </Suspense>
            <ContactSection />
            <a
                href={`https://wa.me/+918709822926`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-3 right-5 text-6xl cursor-pointer text-green-600  z-100"
            >
                <FaWhatsappSquare />
            </a>
        </BrowserRouter>
    );
};

export default App;
