import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import { FiAlignJustify } from "react-icons/fi";
import MobileNav from "../component/MobileNav";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            // Only trigger after scrolling 1 viewport height
            if (currentScroll > window.innerHeight - 600) {
                if (currentScroll > lastScroll) {
                    setShow(false); // scrolling down
                } else {
                    setShow(true); // scrolling up
                }
            } else {
                setShow(true); // always show at top
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <div
            className={`poppins-font fixed top-0 z-50 w-full  sm:px-40 px-5 transition-transform duration-500 ${
                show ? "translate-y-0" : "-translate-y-full"
            } bg-transparent backdrop-blur-md`}
        >
            <div className="h-20 flex items-center justify-between w-full">
                <a href="/" className="cursor-pointer h-22 w-22 ">
                    <img
                        src="/logo2.png"
                        className="h-full w-full scale-170"
                        alt=""
                    />
                </a>
                <div className="hidden  sm:flex justify-between w-full pl-20 items-center ">
                    <ul className="flex items-center gap-8 font-medium  text-sm">
                        <li>
                            <a
                                href="/"
                                className=" px-3 py-2 hover:bg-gray-200 rounded-full duration-400  transition-all "
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="px-3 py-2 hover:bg-gray-200 rounded-full duration-400  transition-all"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="px-3 py-2 hover:bg-gray-200 rounded-full duration-400  transition-all"
                            >
                                Pricing
                            </a>
                        </li>
                    </ul>
                    <div className="flex gap-x-5">
                        <Button title="Get Started" />
                    </div>
                </div>
                {!mobileNavOpen ? (
                    <button
                        onClick={() => setMobileNavOpen(true)}
                        className=" sm:hidden text-4xl"
                    >
                        {" "}
                        <FiAlignJustify />{" "}
                    </button>
                ) : (
                    <button
                        onClick={() => setMobileNavOpen(false)}
                        className=" sm:hidden text-4xl"
                    >
                        {" "}
                        <RxCross1 />{" "}
                    </button>
                )}
            </div>
            <div
                
                className="sm:hidden overflow-hidden "
            >
                {mobileNavOpen && <MobileNav />}
            </div>
        </div>
    );
};

export default Navbar;
